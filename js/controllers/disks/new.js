App.DisksNewController = Ember.Controller.extend({
	needs: "application",
	actions: {
		saveDisk: function() {
			var self = this;

      		var successHandler = function(model) {
        		self.transitionToRoute('disks.show', model.id);
     		 }

	      	var errorHandler = function(reason) {
       			self.set('hasErrors', true);
	        	return false;
	      	}
			self.get("model").save().then(successHandler, errorHandler);
		}
	}
});


