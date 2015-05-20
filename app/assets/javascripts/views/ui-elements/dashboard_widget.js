Mysuperheropal.Views.DashboardWidget = Backbone.View.extend({
  template: JST["ui_elements/dashboard_widget"],

	events: {
		"submit form.profile-picture" : "selectPicture",
		"change .profile-picture input.upload": "uploadPicture"
	},

  render: function () {
    var content = this.template({ user: Mysuperheropal.currentUser });
    this.$el.html(content);
    return this;
  },

	selectPicture: function (event) {
		event.preventDefault();
		$(event.currentTarget).find("input.upload").trigger("click");
	},

	uploadPicture: function (event) {
		var file = event.currentTarget.files[0];
		var reader = new FileReader();
	
		reader.onloadend = function () {
			Mysuperheropal.currentUser._avatar = reader.result;
			Mysuperheropal.currentUser.save({}, {
				url: "/api/users/" + Mysuperheropal.currentUser.id
			});
		}.bind(this);

		if (file) {
      reader.readAsDataURL(file);
    }
	}
});
