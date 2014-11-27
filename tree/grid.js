$(document).ready(function() {
  var gridContainer = $("#contentTable");

  function getDiskImage() {
    return window.location.hash.substr(1);
  }

  var disk_image = getDiskImage();

  function selectDiskImage() {
    disk_image = getDiskImage();
    $('#diskImage').val(disk_image);
    reloadGrid(getUrl());
  }

  function getUrl() {
    return CONFIG.SERVER.URL + '/content_file_infos/' + disk_image;
  }

  function reloadGrid(url) {
    if(_(url).isString()) {
      gridContainer.jqGrid('setGridParam', { url: url });
    }
    gridContainer.trigger('reloadGrid');
  }

  gridContainer.jqGrid({
    url: getUrl(),
    datatype: "json",
    mtype: "GET",
    colNames: ["Filename", "Extension", "Size", "Modified"],
    autowidth: true,
    shrinkToFit: true,
    colModel: [
      { name: "filename", width: 550 },
      { name: "extension", width: 90, fixed: true },
      { name: "filesize", width: 90, fixed: true },
      { name: "mtime.value", width: 120, fixed: true, align: "right", formatter: 'date', formatoptions: { srcformat: 'Y-m-d\\TH:i:s', newformat: 'Y-m-d H:i:s' } },
    ],
    pager: "#gridpager",
    rowNum: 20,
    height: "100%",
    rowList: [10, 20, 50, 100],
    viewrecords: true,
    gridview: true,
    caption: "Disk contents",
    prmNames: { rows: "per_page", extension: "extFilter" },
    postData: {
      volume: function() { return $('#volumeFilter').val(); },
      extFilter: function() { return $('#extFilter').val(); },
      showDeleted: function() { return $('#showDeleted').is(':checked'); },
      hideDirs: function() { return "true"; },
    },
    jsonReader : {
      root: "content_file_infos",
      page: "meta.pagination.page",
      total: "meta.pagination.pages",
      records: "meta.pagination.total_items",
      repeatitems: true,
      id: "id",
    },
  });

  $('#extFilter').change(reloadGrid);
  $('#showDeleted').change(reloadGrid);
  $('#volumeFilter').change(reloadGrid);

  function setHash() {
    window.location.hash = $('#diskImage').val();
  }
  $('#diskImage').change(setHash);
  $(window).on('hashchange', selectDiskImage);

});
