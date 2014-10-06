App.ArchivesPostRoute = Ember.Route.extend({ 
	model: function(params) {
		return this.store.find('archive', params.id);
	}
});