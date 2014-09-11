App.PostsIndexController = Ember.Controller.extend({
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
			alert("new")
			this.transitionTo('posts.new');
		}
	}
});