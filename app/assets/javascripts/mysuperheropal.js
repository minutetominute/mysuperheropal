window.Mysuperheropal = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    new Mysuperheropal.Routers.UsersRouter({ $rootEl: $("main") });
    Backbone.history.start();
  }
};

$(document).ready(function(){
  Mysuperheropal.initialize();
});
