App.AuthoritiesShowController = Ember.Controller.extend({
	actions: {
		toggleIsEditing: function() {
			if (this.get("isEditing")) {
				this.set("isEditing", false);
			}
			else {
				this.set("isEditing", true);
			}
		},

		deleteAuthority: function() {
			var that = this;


      		var successHandler = function(model) {
				that.transitionToRoute('authorities.index');
     		 }

	      	var errorHandler = function(reason) {
       			that.set('hasErrors', true);
	        	return false;
	      	}

			that.get('model').destroyRecord().then(successHandler, errorHandler);
		}
	}
});

