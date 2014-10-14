App.DisksNewRoute = Ember.Route.extend({
	model: function() {
		// get your model(s) here and return it

        var store = this.store;
        return Ember.RSVP.hash({
          disk: store.createRecord('disk', {}),
          archives: store.find('archive')
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
		var disk = models.disk;
	    var archives = models.archives;
		
    	controller.set('disk', disk);		
    	controller.set('archives', archives);
		//controller.set('isEditing', false);
	    controller.set('hasErrors', null);

	}
});