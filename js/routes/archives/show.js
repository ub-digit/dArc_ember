App.ArchivesShowRoute = Ember.Route.extend({ 
	model: function(params) {
		return this.store.find('archive', params.id);
	},

	setupController: function(controller, model) {
		controller.set("model", model);
		//controller.set("isEditing", false);
	}	
});