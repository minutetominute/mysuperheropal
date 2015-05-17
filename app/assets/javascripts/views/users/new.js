Mysuperheropal.Views.NewUserForm = Backbone.View.extend(
	_.extend({}, Mysuperheropal.Mixins.Transitionable, {

		template: JST["users/new"],

		events: {
			"submit form": "createUser"
		},

		render: function () {
			var content = this.template();
			this.$el.html(content);
			return this;
		},

		createUser: function(event) {
			event.preventDefault();
			var json = $(event.target).serializeJSON();
			var user = new Mysuperheropal.Models.User()

			user.set(json)

			user.save({}, {
				success: function(data) {
					Mysuperheropal.currentUser.set(data)
					var newView = new Mysuperheropal.Views.Home();
					this.leftSlideTransition(newView);
					Backbone.history.navigate("");
				}.bind(this)
			});
		}
		
	})
);
