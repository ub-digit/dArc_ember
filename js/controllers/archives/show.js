App.ArchivesShowController = Ember.Controller.extend({
	actions: {
		deleteArchive: function() {
			var that = this;
			var successHandler = function(model) {
				that.transitionToRoute('archives.index');
			}

			var errorHandler = function(reason) {
				that.set('hasErrors', true);
				that.set('errors', reason.responseJSON.errors);
				console.log(reason);
				that.get('model').rollback();
				return false;
			}
			if(confirm("Delete?")){
				that.get('model').destroyRecord().then(successHandler, errorHandler);
			}

		}
	}
});