Mysuperheropal.Views.DashboardWidget = Backbone.View.extend({
  template: JST["ui_elements/dashboard_widget"],

  render: function () {
    var content = this.template({ user: Mysuperheropal.currentUser });
    this.$el.html(content);
    return this;
  },
});
