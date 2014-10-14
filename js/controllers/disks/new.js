App.DisksNewController = Ember.Controller.extend({
	needs: "application",
	actions: {
		saveDisk: function() {
			var that = this;

      		var successHandler = function(model) {
        		that.transitionToRoute('disks.show', model.id);
     		 }

	      	var errorHandler = function(reason) {
       			that.set('hasErrors', true);
	        	return false;
	      	}

			that.get("disk").get("archives").then(function(archives) {
				archives.pushObject(that.get("selectedArchives"));
     			that.get("disk").save().then(successHandler, errorHandler);				
			});
		}
	}
});

