Mysuperheropal.Views.NewsFeed = Backbone.View.extend({
  template: JST["ui_elements/news_feed"],

  render: function () {
    var content = this.template();
    this.$el.html(content);
    return this;
  },
});
