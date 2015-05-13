Mysuperheropal.Views.NewSessionForm = Backbone.View.extend({
  template: JST["sessions/new"],

  events: {
    "submit form": "createSession"
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);
    return this;
  },

  createSession: function (event) {
    event.preventDefault();

    var attrs = $(event.target).serializeJSON().user;

    $.ajax({
      method: "POST",
      url: "/api/sessions",
      data: attrs,
      success: function(user) {
        debugger;
      },
    })
  }

});
