App.AuthoritiesIndexController = Ember.Controller.extend({
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
		createPost: function() {
			this.transitionTo('posts.new');
		}
	}
});