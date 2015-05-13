Mysuperheropal.Views.NewSessionForm = Backbone.View.extend({
  template: JST["session/new"],

  events: {
    "submit form": "createSession"
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);
    return this;
  },

  createSession: function (event) {
    event.preventDefault();

    var attrs = $(event.target).serializeJSON().user;

    $.ajax({
      method: "POST",
      url: "/api/session",
      data: attrs,

      success: function(userAttrs) {
        //create and store currentuser
        var user = new Mysuperheropal.Models.User();
        user.set(userAttrs);
        Mysuperheropal.Models.currentUser = user;

        //add classes to animate transition
        var view = new Mysuperheropal.Views.Home();
        view.render();
        view.$(".container").addClass("off-stage");
        $("#hello").removeClass (function (index, css) {
          return (css.match (/(^|\s)animate-\S+/g) || []).join(' ');
        });

        this.$el.after(view.$el);
        view.$(".container").addClass("animation-slideleftin");
        this.$(".container").addClass("animation-slideleftout");

        //bind callbacks for finishing transitions
        view.$(".container").bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",
          function () {
            view.$(".container").removeClass("off-stage");
            Backbone.history.navigate("home");
          }.bind(this)
        );
        this.$(".container").bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",
          function () {
            this.remove();
          }.bind(this)
        );

      }.bind(this)
    })
  }

});
