App.ArchivesShowRoute = Ember.Route.extend({ 
	model: function(params) {
		return this.store.find('archive', params.id);
	},

	setupController: function(controller, model) {
		controller.set("model", model);
       	controller.set('hasErrors', null);
       	controller.set('errors', null)
		
		//controller.set("isEditing", false);
	}	
});