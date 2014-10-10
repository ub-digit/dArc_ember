App.ArchivesNewController = Ember.Controller.extend({
	needs: "application",
	actions: {
		saveArchive: function() {
			var that = this;

      		var successHandler = function(model) {
	        	console.log("success");
        		that.transitionToRoute('archives.show', model.id);
     		 }

	      	var errorHandler = function(reason) {
	        	console.log("error");
	        	console.log(reason);
       			that.set('hasErrors', true);
	        	return false;
	      	}

			var auths = [];
			$.each(that.get("selectedAuthorities"), function(key, value){
				auths.push(that.get("selectedAuthorities")[key]);
			});

			that.get("archive").get("authorities").then(function(authorities) {
				authorities.pushObjects(auths);
     			that.get("archive").save().then(successHandler, errorHandler);				
			});
		}
	}
});


