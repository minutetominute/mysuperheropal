Mysuperheropal.Views.Home = Backbone.CompositeView.extend({
  template: JST["home"],

  initialize: function () {
    var dashboard = new Mysuperheropal.Views.DashboardWidget();
    this.addSubview(".user-views", dashboard);
    var newsFeed = new Mysuperheropal.Views.NewsFeed();
    this.addSubview(".user-views", newsFeed);
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);
    this.attachSubviews();
    return this;
  }
});
