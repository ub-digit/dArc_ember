App.AuthoritiesNewController = Ember.Controller.extend({
	needs: "application",
	actions: {
		saveAuthority: function() {
			var self = this;

      		var successHandler = function(model) {
				self.transitionToRoute('authorities.show', model.id)
     		 }

	      	var errorHandler = function(reason) {
       			self.set('hasErrors', true);
	        	return false;
	      	}
			self.get("model").save().then(successHandler, errorHandler);
		}

	}
});