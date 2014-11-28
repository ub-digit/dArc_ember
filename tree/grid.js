$(document).ready(function() {
  var $gridContainer = $("#contentTable");

  var $controlsForm = $('#filters');

  function strStartsWith(haystack, needle) {
    return haystack.lastIndexOf(needle, 0) === 0;
  }

  function HIDE_CATEGORY_PREDICATE(category) {
    return strStartsWith(category, 'sys/');
  }

  function FORMAT_CATEGORIES(categoriesArray) {
    return _(categoriesArray).reject(HIDE_CATEGORY_PREDICATE);
  }

  var PARAM_TRANSFORMERS = {
    hideDirs: _.constant('false'),
    negCategory: function(original) { return 'sys/dirdots,' + $('#negExtraCategory').val() + ',' + original; },
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
      $gridContainer.jqGrid('setGridParam', { url: url });
    }
    $gridContainer.trigger('reloadGrid');
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
      $gridContainer.jqGrid('clearGridData');
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

  /**
   * Crawls through the $controlsForm element for form controls, and builds a
   * hash mapping parameter names to getter functions. Parameter names are
   * determined by the name attributes.
   *
   * The default getter is to invoke getFilterParamFrom function with the form
   * control as the parameter. Each getter also hooks in the corresponding
   * transformer function from the PARAM_TRANSFORMERS hash, if present. The
   * transformer is passed the value of the form control and should return the
   * transformed parameter value.
   */
  function makeFilterGetters() {
    var namesAndGetters = $controlsForm.find('input, select').map(function(index, el) {
      var $el = $(el);
      return {
        name: $el.attr('name'),
        getter: _.partial(getFilterParamFrom, $el),
      };
    });

    var namesToGetters = _.reduce(
      namesAndGetters,
      function(getters, nameAndGetter) {
        if(nameAndGetter.name) {
          getters[nameAndGetter.name] = nameAndGetter.getter;
        }
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

  function updateDynamicMultiselects(data) {
    $('.category-multiselect-dynamic').each(function(index, el) {
      var $el = $(el);
      var categories = _(data.meta.all_categories).chain()
        .reject(HIDE_CATEGORY_PREDICATE)
        .sortBy(_.identity)
        .value();

      $el.find('option').each(function(i, opt) {
        if(!_(categories).contains($(opt).val())) {
          $(opt).remove();
        }
        // removes value from the categories array
        categories.splice($.inArray($(opt).val(), categories), 1);
      });
      _(categories).each(function(cat) {
        $el.append($("<option></option>").attr("value",cat).text(cat));
      });
      $el.multiselect('refresh');
    });
  }

  selectDiskImage();


  $.each({
    'Hide deleted': 'sys/deleted',
    'Hide FS': 'sys/fs',
    'Hide directories': 'sys/dir',
    'Hide orphans': 'sys/orphans',
  }, function(text, value) {
    $('#negExtraCategory').append($("<option></option>").attr("selected","selected").attr("value",value).text(text));
  });

  $gridContainer.jqGrid({
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
      { name: "categories", width: 90, formatter: FORMAT_CATEGORIES },
    ],
    pager: "#gridpager",
    rowNum: 30,
    height: "100%",
    rowList: [10, 20, 30, 40, 50, 100],
    viewrecords: true,
    gridview: true,
    caption: "Disk contents",
    prmNames: { rows: "per_page", extension: "extFilter", sort: "sortField", order: "sortOrder" },
    postData: makeFilterGetters(), // postData accepts a hash with param names => functions
    jsonReader : {
      root: "content_file_infos",
      page: "meta.pagination.page",
      total: "meta.pagination.pages",
      records: "meta.pagination.total_items",
      repeatitems: true,
      id: "id",
    },
    loadComplete: updateDynamicMultiselects,
  });

  $controlsForm.change(reloadGrid);

  $('#diskImage').change(setHash);
  $(window).on('hashchange', selectDiskImage);

  $('.category-multiselect').each(function(index, el) {
    var isDirty = false;
    function dirtify() {
      isDirty = true;
    }

    $(el).multiselect({
        noneSelectedText: $(el).clone().children().remove().end().text() || 'Select categories',
        selectedList: 4,
        click: dirtify,
        checkAll: dirtify,
        uncheckAll: dirtify,
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
