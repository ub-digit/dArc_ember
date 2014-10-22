App.AuthoritiesIndexController = Ember.Controller.extend({
	queryParams: ['page', 'query'],
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
		createAuthority: function() {
			this.transitionToRoute('authorities.new');
		}
	}
});