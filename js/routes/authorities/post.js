App.AuthoritiesPostRoute = Ember.Route.extend({ 
	model: function(params) {
		return this.store.find('authority', params.id);
	},
	setupController: function(controller, model) {
		controller.set("model", model);
		controller.set("isEditing", false);
	}	
});