App.ArchivesIndexController = Ember.Controller.extend({
	needs: "application",
	actions: {
		toggleIsEditing: function() {
			if (this.get('isEditing')) {
				this.set('isEditing', false);
			}
			else {
				this.set('isEditing', true);
			}
		},
		createArchive: function() {
			this.transitionToRoute('archives.new');
		}
	}
});