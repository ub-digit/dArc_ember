App.ApplicationRoute = Ember.Route.extend({
	model: function() {
		// this is the place to do init work for the application
		App.sessionKey = null; // null but please set sessionKey and use this if logged in
		App.lang = CONFIG.LANG;
		return this.store.find("type");
	},

	setupController: function(controller, model) {
		controller.set("type", model);
	}
});