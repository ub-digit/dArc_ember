App.DisksShowController = Ember.Controller.extend({
	actions: {
		deleteDisk: function() {
			var that = this;

			var successHandler = function(model) {
				that.transitionToRoute('archives.index');
			}

			var errorHandler = function(reason) {
				that.set('hasErrors', true);
				that.get('model').rollback();
				return false;
			}
			if (confirm("Delete")){
				that.get('model').destroyRecord().then(successHandler, errorHandler);
			}
		},
		openContentBrowser: function(diskImage) {
			window.open('/tree/#'+diskImage.get('id'), '_blank');
			return false;
		}
	}
});