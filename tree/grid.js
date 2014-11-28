$(document).ready(function() {
  var gridContainer = $("#contentTable");

  var controlsForm = $('form.controls');

  var PARAM_TRANSFORMERS = {
    hideDirs: _.constant('false'),
    negCategory: function(original) { return 'sys/dirdots,sys/dir,sys/orphans,' + original; },
  };

  var disk_image;

  function getUrl() {
    return CONFIG.SERVER.URL + '/content_file_infos/' + disk_image;
  }

  function setHash() {
    window.location.hash = $('#diskImage').val();
  }

  function getDiskImage() {
    return window.location.hash.substr(1);
  }

  function selectDiskImage() {
    disk_image = getDiskImage();
    $('#diskImage').val(disk_image);
    reloadGrid(getUrl());

    updateVolumeOptions();
  }

  function reloadGrid(url) {
    if(_(url).isString()) {
      gridContainer.jqGrid('setGridParam', { url: url });
    }
    gridContainer.trigger('reloadGrid');
  }

  function updateVolumeOptions() {
    var $el = $('#volumeFilter');
    var $anyOption = $el.find('[value=""]').detach();
    $el.empty();
    $el.append($anyOption);

    $.get(CONFIG.SERVER.URL + '/diskimages/' + disk_image)
    .done(function(data) {
      _(data.diskimage.volumes).chain()
        .sortBy('id')
        .each(function(volume, index) {
          $el.append('<option value="' + volume.id + '">' + (index + 1) + '</option>');
        });
    }).fail(function(jqXHR, textStatus, errorThrown) {
      gridContainer.jqGrid('clearGridData');
    });
  }

  function getFilterParamFrom($el) {
    if($el.attr('type') === 'checkbox') {
      return $el.prop('checked');
    } else if ($el.prop('multiple') && _.isNull($el.val())) {
      return '';
    }
    return $el.val();
  }

  function makeFilterGetters() {
    var namesAndGetters = controlsForm.find('input, select').map(function(index, el) {
      var $el = $(el);
      return {
        name: $el.attr('name'),
        getter: _.partial(getFilterParamFrom, $el),
      };
    });

    var namesToGetters = _.reduce(
      namesAndGetters,
      function(getters, nameAndGetter) {
        getters[nameAndGetter.name] = nameAndGetter.getter;
        return getters;
      },
      {}
    );

    namesToGetters = _.reduce(
      PARAM_TRANSFORMERS,
      function(getters, transformer, paramName) {
        if(_(getters).has(paramName)) {
          getters[paramName] = _.compose(transformer, getters[paramName]);
        } else {
          getters[paramName] = _.partial(transformer, '');
        }
        return getters;
      },
      namesToGetters
    );

    return namesToGetters;
  }

  selectDiskImage();

  gridContainer.jqGrid({
    url: getUrl(),
    datatype: "json",
    mtype: "GET",
    colNames: ["Path", "Filename", "Extension", "Size", "Modified", "Categories"],
    autowidth: true,
    shrinkToFit: true,
    colModel: [
      { name: "filename", width: 550 },
      { name: "name", width: 90 },
      { name: "extension", width: 90, fixed: true },
      { name: "filesize", width: 90, fixed: true },
      { name: "mtime.value", width: 120, fixed: true, align: "right", formatter: 'date', formatoptions: { srcformat: 'Y-m-d\\TH:i:s', newformat: 'Y-m-d H:i:s' } },
      { name: "categories", width: 90 },
    ],
    pager: "#gridpager",
    rowNum: 30,
    height: "100%",
    rowList: [10, 20, 30, 40, 50, 100],
    viewrecords: true,
    gridview: true,
    caption: "Disk contents",
    prmNames: { rows: "per_page", extension: "extFilter", sort: "sortField", order: "sortOrder" },
    postData: makeFilterGetters(),
    jsonReader : {
      root: "content_file_infos",
      page: "meta.pagination.page",
      total: "meta.pagination.pages",
      records: "meta.pagination.total_items",
      repeatitems: true,
      id: "id",
    },
    loadComplete: function(data) {
      categories = $(data.meta.all_categories);
      $('#posMultiCategory').find('option').each(function(i,opt){
        if($.inArray($(opt).val(), $(categories)) == -1) {
          $(opt).remove();
        }
        // removes value from the categories array
        categories.splice( $.inArray($(opt).val(), categories), 1 );
      });
      categories.each(function(i,cat) {
        $("#posMultiCategory").append($("<option></option>").attr("value",cat).text(cat)); 
      });
      $("#posMultiCategory").multiselect('refresh');
    },
  });

  controlsForm.change(reloadGrid);

  $('#diskImage').change(setHash);
  $(window).on('hashchange', selectDiskImage);

  $("#posMultiCategory").each(function(index, el) {
    var isDirty = false;
    $(el).multiselect({
        noneSelectedText: 'Select categories',
        selectedList: 4,
        click: function() {
           isDirty = true;
        },
        checkAll: function() {
           isDirty = true;
        },
        uncheckAll: function() {
           isDirty = true;
        },
        beforeclose: function() {
          if(isDirty) {
            reloadGrid();
          }
          isDirty = false;
          return true;
       },
    });
  }).change(function(event) {
    event.preventDefault();
    event.stopPropagation();
  });

});
