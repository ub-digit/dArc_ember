$(function() {
  var treeContainer = $('#tree-container');

  var ROOT_ID = 2;

  function getDiskImage() {
    return window.location.hash.substr(1);
  }

  var settings = {
    sortNodes: function() {
      return $('#sortNodes').prop('checked');
    },
    filter: function() {
      return {
        showDeleted: $('#showDeleted').prop('checked'),
        extFilter: $('#extFilter').val(),
        per_page: -1,
        negCategory: 'dirdots' + ',' + $('#negCategory').val(),
      };
    },
  };

  /**
   * Construct a cached version of $.getJSON with a private cache.
   */
  function makeCachedGetJSON() {
    var cachedPromises = {};
    return function(url, data) {
      var requestId = url;
      if(data) {
        requestId += '?' + $.param(data);
      }

      if(!_(cachedPromises).has(requestId)) {
        cachedPromises[requestId] = $.getJSON(url, data);
      }
      return cachedPromises[requestId];
    };
  }
  var cachedGetJSON = makeCachedGetJSON();

  var nodeStates = {};
  function saveNodeState(event, jstreeData) {
    nodeStates[jstreeData.node.id] = jstreeData.node.state;
  }

  function makeVolumeCallback(cb) {
    return function(data) {
      if(data.diskimage.volumes.length < 1) {
        return notFound(getDiskImage());
      }
      cb.call(this, _(data.diskimage.volumes).chain()
        .sortBy('id')
        .map(function(node, index) {
          var id = node.id + '_' + ROOT_ID;
          return {
            id: id,
            data: { id: ROOT_ID, volume: node.id },
            text: 'Volume ' + (index + 1) + ' (' + node.id + ')',
            children: true,
            state: nodeStates[id],
          };
        })
        .value()
      );
    };
  }
  function makeInodeCallback(obj, cb) {
    return function(data) {
      cb.call(this, _(data.content_file_infos).chain()
        .reject(function(node) { return node.class === 'hide'; })
        .sortBy(function(node) {
          if(_(settings).result('sortNodes')) {
            return node.name;
          }
        })
        .map(function(node) {
          var id = obj.data.volume + '_' + node.inode;
          return {
            id: id,
            data: $.extend({}, node, { id: node.inode, volume: obj.data.volume }),
            text: node.name,
            children: node.name_type !== 'r',
            icon: node.name_type === 'r' ? 'jstree-file' : 'jstree-folder',
            state: nodeStates[id],
          };
        })
        .value()
      );
    };
  }

  function create_tree() {
    var disk_image = getDiskImage();

    if(disk_image) {
      treeContainer.jstree({
        plugins: ['core','grid'],
        core: {
          data: function(obj, cb) {
            if(obj.id === '#') {
              cachedGetJSON(CONFIG.SERVER.URL + "/diskimages/" + disk_image)
                .done(makeVolumeCallback(cb))
                .error(function(jqXHR, textStatus, errorThrown) {
                  notFound(disk_image);
                });
            } else {
              cachedGetJSON(
                CONFIG.SERVER.URL + "/content_file_infos/" + disk_image + "/" + obj.data.volume + "/" + obj.data.id,
                _(settings).result('filter')
              ).done(makeInodeCallback(obj, cb));
            }
          }
        },
        grid: {
          columns: [{
            header: 'Name',
            width: 'auto',
            title: 'libmagic',
          }, {
            header: 'Size',
            value: 'filesize',
            width: 200,
          }, {
            header: 'Modified',
            value: function(node) { return node.mtime ? node.mtime.value : ''; },
            width: 300,
          }],
        },
      });

      _([
        'open_node.jstree',
        'close_node.jstree',
        'enable_node.jstree',
        'disable_node.jstree',
        'select_node.jstree',
        'deselect_node.jstree',
      ]).each(function(eventName) {
        treeContainer.on(eventName, saveNodeState);
      });
    } else {
      treeContainer.empty().append('<p>Please select a disk image.</p>');
    }
  }

  function notFound(disk_image) {
    treeContainer.empty().append('<p>Disk image ' + disk_image + ' not found.</p>');
  }

  function recreate_tree() {
    treeContainer.jstree('refresh');
  }

  $('#showDeleted').change(recreate_tree);
  $('#extFilter').change(recreate_tree);
  $('#sortNodes').change(recreate_tree);
  $('#closeAll').click(function() {
    treeContainer.jstree('close_all');
  });
  $('#clearCache').click(function() {
    cachedGetJSON = makeCachedGetJSON();
  });
  $('#diskImage').change(function() {
    window.location.hash = $('#diskImage').val();
    treeContainer.jstree('destroy');
    create_tree();
  });

  create_tree();

});
