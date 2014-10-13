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
		this.set('archives', this.store.find('archive'));
		this.set('disks', this.store.find('disk'));
	},
});
