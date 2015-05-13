Mysuperheropal.Views.DashboardWidget = Backbone.View.extend({
  template: JST["ui_elements/dashboard_widget"],

  render: function () {
    var content = this.template();
    this.$el.html(content);
    return this;
  },
});
