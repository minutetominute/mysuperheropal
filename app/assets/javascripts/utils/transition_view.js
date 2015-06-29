Mysuperheropal.Mixins.Transitionable = {

  leftSlideTransition: function(newView, route) {
    newView.render();
    newView.$(".container").addClass("off-stage");

    this.$el.after(newView.$el);
    newView.$(".container").addClass("animation-slideleftin");
    this.$(".container").addClass("animation-slideleftout");

    //bind callbacks for finishing transitions
    newView.$(".container").bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",
      function () {
        newView.$(".container").removeClass("off-stage");
        Backbone.history.navigate(route);
      }.bind(this)
    );
    this.$(".container").bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",
      function () {
        this.remove();
      }.bind(this)
    );

    Mysuperheropal.router.setCurrentView(newView);
  },

};
