App.AuthoritiesShowRoute = Ember.Route.extend({ 
	model: function(params) {
		console.log(params.id);
		return this.store.find('authority', params.id);

	},
	setupController: function(controller, model) {
		console.log('DEBUG', model);
		controller.set("model", model);
		controller.set("isEditing", false);
       	controller.set('hasErrors', null);
	}	
});