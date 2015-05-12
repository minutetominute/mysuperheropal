Mysuperheropal.Views.NewUserForm = Backbone.View.extend({
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

    user.save({
      success: function() {
        Mysuperheropal.Models.currentUser = user;
        Backbone.history.navigate("home", {trigger: true});
      }.bind(this)
    });
  }

});
