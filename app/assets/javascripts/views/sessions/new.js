Mysuperheropal.Views.NewSessionForm = Backbone.View.extend({
  template: JST["sessions/new"],

  events: {
    "click button": "createSession"
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);
    return this;
  },

  createSession: function (event) {
    event.preventDefault();


  }

});
