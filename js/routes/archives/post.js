App.ArchivesPostRoute = Ember.Route.extend({ 
	model: function(params) {
		return this.store.find('example', params.id);
	}
});