$(document).ready(function() {
  $("#contentTable").jqGrid({
    url: "/api/content_file_infos/117/32256",
    datatype: "json",
    mtype: "GET",
    colNames: ["Filename", "Extension", "Size", "Modified"],
    colModel: [
      { name: "filename", width: 550 },
      { name: "extension", width: 90 },
      { name: "filesize", width: 90 },
      { name: "mtime.value", width: 120, align: "right", formatter: 'date', formatoptions: { srcformat: 'Y-m-d\\TH:i:s', newformat: 'Y-m-d H:i:s' } },
    ],
    pager: "#gridpager",
    rowNum: 10,
    height: "100%",
    rowList: [10, 20, 30],
    sortname: "filename",
    sortorder: "desc",
    viewrecords: true,
    gridview: true,
    autoencode: true,
    caption: "Disk contents",
    prmNames: { rows: "per_page", extension: "extFilter" },
    postData: {
      'extFilter': function() { return $('#extFilter').val(); },
      'showDeleted': function() { return $('#showDeleted').is(':checked'); },
      'hideDirs': function() { return "true"; },
    },
    jsonReader : {
      root: "content_file_infos",
      page: "meta.pagination.page",
      total: "meta.pagination.pages",
      records: "meta.pagination.total_items",
      repeatitems: true,
      cell: "cell",
      id: "id",
      userdata: "userdata",
      subgrid: {
        root:"rows",
        repeatitems: true,
        cell:"cell",
      }
    },
  });

  $('#extFilter').change(function () {
    $("#contentTable").trigger('reloadGrid');
  });
  $('#showDeleted').change(function () {
    $("#contentTable").trigger('reloadGrid');
  });
});
