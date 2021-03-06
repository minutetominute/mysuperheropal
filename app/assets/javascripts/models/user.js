Mysuperheropal.Models.User = Backbone.Model.extend({
  url: "api/users",
});

Mysuperheropal.Models.CurrentUser = Mysuperheropal.Models.User.extend({

	url: "/api/session",

	initialize: function(options) {
		this.listenTo(this, "change", this.fireSessionEvent);
	},

	isSignedIn: function() {
		return !this.isNew();
	},

	signIn: function(options) {
		var model = this;
		var credentials = {
			"email": options.email,
			"password": options.password
		};

		$.ajax({
			url: this.url,
			type: "POST",
			data: credentials,
			dataType: "json",
			success: function(data) {
				model.set(data);
				options.success && options.success();
			},
			error: function() {
				options.error && options.error();
			}
		});
	},

	signOut: function(options){
		var model = this;

		$.ajax({
			url: this.url,
			type: "DELETE",
			dataType: "json",
			success: function(data){
				model.clear();
				options && options.success && options.success();
			}
		});
	},

	fireSessionEvent: function(){
		if(this.isSignedIn()){
			this.trigger("signedIn");
		} else {
			this.trigger("newSession");
		}
	},

	toJSON: function () {
		var json = { user: _.clone(this.attributes) };

		if (this._avatar) {
			json.user.avatar = this._avatar;
		}

		return json;
	}

});
