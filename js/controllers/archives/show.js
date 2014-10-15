App.ArchivesShowController = Ember.Controller.extend({
	actions: {
		deleteArchive: function() {
			var that = this;
     		var successHandler = function(model) {
				that.transitionToRoute('archives.index');
     		 }

	      	var errorHandler = function(reason) {
       			that.set('hasErrors', true);
	        	return false;
	      	}

			that.get('model').destroyRecord().then(successHandler, errorHandler);

		}
	}
});