Mysuperheropal.Routers.UsersRouter = Backbone.Router.extend({
  routes: {
    "": "home",
    "signup": "newUserForm",
    "login": "newSessionForm",
    "logout": "logOut"
  },

  initialize: function(options) {
    this.$rootEl = options.$rootEl;
  },

  newUserForm: function () {
		Mysuperheropal.currentUser.trigger("newUser");
    var view = new Mysuperheropal.Views.NewUserForm();
    this._swapView(view);
  },

  newSessionForm: function (callback) {
		Mysuperheropal.currentUser.trigger("newSession");
    var view = new Mysuperheropal.Views.NewSessionForm({
      callback: callback
    });
    this._swapView(view);
  },

  home: function () {
    var callback = this.home.bind(this);
    if (!this._requireSignedIn(callback)) { return; }

    var view = new Mysuperheropal.Views.Home();
    this._swapView(view);
  },

  logOut: function() {
    Mysuperheropal.currentUser.signOut();
    Backbone.history.navigate("login", { trigger: true });
  },

  setCurrentView(view) {
    this._currentView = view;
  },

  _requireSignedIn: function(callback){
    if (!Mysuperheropal.currentUser.isSignedIn()) {
      callback = callback || this._goHome.bind(this);
      this.newSessionForm(callback);
      return false;
    }

    return true;
  },

  _goHome: function(){
    Backbone.history.navigate("", { trigger: true });
  },

  _swapView: function (newView) {
    this._currentView && this._currentView.remove()
    this._currentView = newView;
    this.$rootEl.html(newView.render().$el)
  }
});
