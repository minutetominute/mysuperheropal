Mysuperheropal.Routers.UsersRouter = Backbone.Router.extend({
  routes: {
    "": "homeOrLogin",
    "signup": "newUserForm",
    "login": "newSessionForm",
    "home": "home"
  },

  initialize: function(options) {
    this.$rootEl = options.$rootEl;
  },

  newUserForm: function () {
    var view = new Mysuperheropal.Views.NewUserForm();
    this._swapView(view);
  },

  newSessionForm: function () {
    var view = new Mysuperheropal.Views.NewSessionForm();
    this._swapView(view);
  },

  homeOrLogin: function () {
    var view = null;
    if (Mysuperheropal.Models.currentUser) {
      view = Mysuperheropal.Views.Home()
    } else {
      view = new Mysuperheropal.Views.NewSessionForm();
    }

    this._swapView(view);
  },

  home: function () {
    console.log("hello!");
  },

  _swapView: function (newView) {
    this._currentView && this._currentView.remove()
    this._currentView = newView;
    this.$rootEl.html(newView.render().$el)
  },

});
