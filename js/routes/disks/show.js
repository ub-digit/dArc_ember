App.DisksShowRoute = Ember.Route.extend({ 
	model: function(params) {
		return this.store.find('disk', params.id);
	},

	setupController: function(controller, model) {
		controller.set("model", model);
       	controller.set('hasErrors', null);
		//controller.set("isEditing", false);
	}	
});