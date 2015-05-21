Mysuperheropal.Views.NewSessionForm = Backbone.View.extend(
	_.extend({}, Mysuperheropal.Mixins.Transitionable, {

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


		signInCallback: function (event) {
			if (this.callback) {
				this.callback();
			} else {
				Backbone.history.navigate("", { trigger: true });
			}
		}
	})
);
