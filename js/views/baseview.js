App.BaseView = Ember.View.extend({

	willAnimateIn : function () {
        this.$().css("opacity", 0);
    },
    animateIn : function (done) {
        this.$().fadeTo(CONFIG.ANIMATIONSPEED, 1, done);
    },
    didAnimateIn: function() {
		this.$().css("position", "relative");
    },

   	willAnimateOut: function() {
   	},
    animateOut : function (done) {
        this.$().fadeTo(CONFIG.ANIMATIONSPEED, 0, done);
    },
    didAnimateOut: function() {

    }
});