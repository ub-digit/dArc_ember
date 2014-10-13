App.DisksNewController = Ember.Controller.extend({
	needs: "application",
	actions: {
		saveDisk: function() {
			var self = this;
			self.get("model").save().then(function(model){
				self.transitionToRoute('disks.show', model.id)
			}, function(data){return false;})
		}
	}
});


