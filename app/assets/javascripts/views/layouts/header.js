Mysuperheropal.Views.Header = Backbone.View.extend({
	templates: {
		newSession: JST["layouts/new_session_header"],
		newUser: JST["layouts/new_user_header"],
		signedIn: JST["layouts/signed_in_header"]
	},

	events: {
		"click "
	}

	initialize: function () {
		this.listenTo(Mysuperheropal.currentUser,
				"newUser",
				this.render.bind(this, this.templates["newUser"]));
		this.listenTo(Mysuperheropal.currentUser,
				"newSession",
				this.render.bind(this, this.templates["newSession"]));
		this.listenTo(Mysuperheropal.currentUser,
				"signedIn",
				this.render.bind(this, this.templates["signedIn"]));
	},

	render: function (template) {
		var content = template();
		this.$el.html(content);
		return this;
	},
});
