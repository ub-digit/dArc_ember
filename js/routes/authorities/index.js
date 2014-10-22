App.AuthoritiesIndexRoute = Ember.Route.extend({
	queryParams: {
		page: {
			refreshModel: true
		},
		query: {
			refreshModel: true
		}
    },
    model: function(params) {
		// get your model(s) here and return it
		if(!params.page) {
	    	params.page = 1;
		}
		return this.store.find('authority', params);

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
		controller.set('isEditing', false);
	}
});
