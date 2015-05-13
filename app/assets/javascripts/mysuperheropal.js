window.Mysuperheropal = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    new Mysuperheropal.Routers.UsersRouter({ $rootEl: $("main") });
    this.header = new Mysuperheropal.Views.Header();
    $("header").html(this.header.render().$el);
    Backbone.history.start();
  }
};

$(document).ready(function(){
  Mysuperheropal.initialize();
});
