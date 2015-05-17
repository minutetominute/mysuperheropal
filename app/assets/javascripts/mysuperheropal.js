window.Mysuperheropal = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
	Mixins: {},
  initialize: function() {
		this.currentUser = new Mysuperheropal.Models.CurrentUser();
		this.currentUser.fetch();

    this.router = new Mysuperheropal.Routers.Router(
				{ $rootEl: $("main") }
		);
    this.header = new Mysuperheropal.Views.Header();
    $("header").html(
				this.header.render(this.header.templates["newSession"]).$el
		);
    Backbone.history.start();
  }
};

$(document).ready(function(){
  Mysuperheropal.initialize();
});
