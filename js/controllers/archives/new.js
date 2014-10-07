App.ArchivesNewController = Ember.Controller.extend({
	needs: "application",
	actions: {
		saveArchive: function() {
			var self = this;
			self.get("model").save().then(function(model){
				self.transitionToRoute('archives.show', model.id)
			}, function(data){return false;})
		}
	}
});