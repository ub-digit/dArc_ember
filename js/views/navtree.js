App.NavtreeView = App.BaseView.extend({
  // Creates the jstree. Is run when the element of the view is inserted
  createTree: function() {
    var controller = this.get('controller');

    $('#navtree').jstree({
      'core' : {
        'data' : function (obj, cb) {
          // obj is the node being loaded. children of obj should be inserted by calling cb.call
          // the special id '#' is the built-in, hidden root of the tree
          if(obj.id === '#') {
            // insert all archives at the top level
			var tree_nodes = [];
            controller.archives.forEach(function(node) {
              // save the route to take in the object since the type of an ember data
              // object is difficult to determine
              node.set('tree_route','archives.show');
              tree_nodes.push({'id': node.get('id'), 'data': node, 'text': node.get('title'), 'children': true, 'icon': 'jstree-folder'});
            });
			cb.call(this, tree_nodes);
          } else {
            // insert disks as children of archives
            var tree_nodes = [];
            controller.disks.forEach(function(node) {
              // only insert this disk as a child if the obj node is our parent
              if(node.get('archives').contains(obj.data)) {
                // save the route to take in the object since the type of an ember data
                // object is difficult to determine
                node.set('tree_route','disks.show');
                tree_nodes.push({'id': node.get('id'), 'data': node, 'text': node.get('title'), 'children': false, 'icon': 'jstree-file'});
              }
            });
			cb.call(this, tree_nodes);
          }
        },
      }, //core
    }).bind("select_node.jstree", function(evt, data){
      // transition to a route and deselect the selected node
      controller.transitionToRoute(data.node.data.get('tree_route'), data.node.data.get('id'));
      data.instance.deselect_node(data.node);
    });

  }.on('didInsertElement'),

  // Runs a refresh on the tree
  refreshTree: function() {
    $('#navtree').jstree("refresh");
  },

  // Manually trigger an update on the controller when the view is loaded
  // This is needed because the data may be loaded before the view and will therefore
  // not be observed to change
  navtreeLoaded: function() {
  	this.get('controller').navDataChanged();
  }.on('didInsertElement'),

  // Observe the archives and disks arrays in the controller and trigger a refresh
  // if they change
  controllerDataChanged: function() {
    Ember.run.once(this, 'refreshTree');
  }.observes('controller.archives.@each.title','controller.disks.@each.title'),

});