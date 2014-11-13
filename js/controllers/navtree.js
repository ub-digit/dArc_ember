App.NavtreeController = Ember.Controller.extend({
    needs: "application",
	archives: [],
	disks: [],

	// This function is triggered when something is changed in the set of archive model
	// objects or the set of disk model objects.
	navDataChanged: function() {
		Ember.run.once(this, 'updateNavData');
	}.observes('archive', 'disk'),

	// Update the arrays of archives and disks
	updateNavData: function() {
		this.set('archives', this.store.filter('archive', {id: null}, function(item) {
			//console.log(item.get('id')); 
			if(!item.get('id')) { return false; }
			//console.log("OK");
//			if(item.get('currentState.stateName') === 'root.loaded.created.uncommitted') { return false; } 
//			if(item.get('currentState.stateName') === 'root.empty') { return false; } 
			return true;
		}));
//		this.set('archives', this.store.find('archive'));
		this.set('disks', this.store.find('disk'));
	},
	
	createArchive: function() {
		this.transitionToRoute('archives.new');
	},
	createDisk: function() {
		this.transitionToRoute('disks.new');
	},

});
