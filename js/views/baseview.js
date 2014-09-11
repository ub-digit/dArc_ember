App.BaseView = Ember.View.extend({

	willAnimateIn : function () {
        this.$().css("opacity", 0);
    },

    animateIn : function (done) {
        this.$().fadeTo(CONFIG.ANIMATIONSPEED, 1, done);
    },

    animateOut : function (done) {
        this.$().fadeTo(CONFIG.ANIMATIONSPEED, 0, done);
    }
});