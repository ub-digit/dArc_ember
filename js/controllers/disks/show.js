App.DisksShowController = Ember.Controller.extend({
	actions: {
		deleteDisk: function() {
			var that = this;

      		var successHandler = function(model) {
				that.transitionToRoute('disks.index');
     		 }

	      	var errorHandler = function(reason) {
       			that.set('hasErrors', true);
	        	return false;
	      	}

			that.get('model').destroyRecord().then(successHandler, errorHandler);
		}
	}
});