Mysuperheropal.Views.NewSessionForm = Backbone.View.extend({
  template: JST["session/new"],

  events: {
    "submit form": "createSession",
		"click button.demo-user": "demoUserSession"
  },

  initialize: function (options) {
    this.callback = options.callback;
    this.listenTo(Mysuperheropal.currentUser, "signIn", this.signInCallback);
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);
    return this;
  },

  createSession: function (event) {
    event.preventDefault();
    var params = $(event.target).serializeJSON().user;

    var newView = new Mysuperheropal.Views.Home();
    params.success = this.leftSlideTransition.bind(this, newView);

    Mysuperheropal.currentUser.signIn(params);
  },
	
	demoUserSession: function (event) {
		event.preventDefault();
		var email = $(event.currentTarget).data("email");
		var password = $(event.currentTarget).data("password");
		this.$(".email").val(email);
		this.$(".password").val(password);
		event.target = this.$("form");
		this.createSession(event);
	},

  leftSlideTransition: function(newView) {
    newView.render();
    newView.$(".container").addClass("off-stage");

    this.$el.after(newView.$el);
    newView.$(".container").addClass("animation-slideleftin");
    this.$(".container").addClass("animation-slideleftout");

    //bind callbacks for finishing transitions
    newView.$(".container").bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",
      function () {
        newView.$(".container").removeClass("off-stage");
        Backbone.history.navigate("home");
      }.bind(this)
    );
    this.$(".container").bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",
      function () {
        this.remove();
      }.bind(this)
    );

    Mysuperheropal.router.setCurrentView(newView);
  },

  signInCallback: function (event) {
    if (this.callback) {
      this.callback();
    } else {
      Backbone.history.navigate("", { trigger: true })
    }
  }


});
