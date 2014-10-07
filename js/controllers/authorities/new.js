App.AuthoritiesNewController = Ember.Controller.extend({
	needs: "application",
	actions: {
		saveAuthority: function() {
			var self = this;
			self.get("model").save().then(function(model){
				self.transitionToRoute('authorities.show', model.id)
			}, function(data){return false;})
			//return true;
		}
	}
});