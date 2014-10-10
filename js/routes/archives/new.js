App.ArchivesNewRoute = Ember.Route.extend({
	model: function() {
		// get your model(s) here and return it

        var store = this.store;
        return Ember.RSVP.hash({
          archive: store.createRecord('archive', {}),
          authorities: store.find('authority')
        });
	},
	beforeModel: function() {
		// if you need to transition to another route do it here 
		//this.transitionTo('routename');
	},

  // The code below is the default behavior, so if this is all you
  // need, you do not need to provide a setupController implementation
  // at all.
	setupController: function(controller, models) {
		var archive = models.archive;
	    var authorities = models.authorities;
		
    	controller.set('archive', archive);
    	controller.set('authorities', authorities);
    	controller.set('selected_authorities', []);

	    controller.set('hasErrors', null);
		//controller.set('isEditing', false);

	}
});


