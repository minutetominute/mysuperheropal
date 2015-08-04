Mysuperheropal.Mixins.Transitionable = {

  leftSlideTransition: function(newView, route, callback) {
    newView.$(".container").addClass("off-stage");

    this.$el.after(newView.$el);
    newView.$(".container").addClass("animation-slideleftin");
    this.$(".container").addClass("animation-slideleftout");

    //bind callbacks for finishing transitions
    newView.$(".container").one("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",
      function () {
        newView.$(".container").removeClass("off-stage animation-slideleftin");
        Backbone.history.navigate(route);
        callback && callback();
      }.bind(this)
    );
    this.$(".container").one("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",
      function () {
        this.remove();
      }.bind(this)
    );

    Mysuperheropal.router.setCurrentView(newView);
  },

};
