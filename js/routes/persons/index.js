App.PersonsIndexRoute = Ember.Route.extend({
	model: function() {
		// get your model(s) here and return it
		console.log("hittaperson");
		return this.store.find('person');

	},
	beforeModel: function() {
		// if you need to transition to another route do it here 
		//this.transitionTo('routename');
	},

  // The code below is the default behavior, so if this is all you
  // need, you do not need to provide a setupController implementation
  // at all.
	setupController: function(controller, model) {
		controller.set('model', model); // if you need setupController you will need this line
	}
});
