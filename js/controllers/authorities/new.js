App.AuthoritiesNewController = Ember.Controller.extend({
	needs: "application",
	actions: {
		saveAuthority: function() {
			var self = this;
			this.get("model").save().then(function(model){
				this.transitionToRoute('authorities.post', { id: model.id })
			}, function(data){return false;})
			return true;
		}
	}
});