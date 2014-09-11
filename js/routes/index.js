App.IndexRoute = Ember.Route.extend({
	beforeModel: function() {
		// if you need to transition to another route do it here 
		this.transitionTo('posts');
	}
});
