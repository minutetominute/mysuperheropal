Mysuperheropal.Mixins.ItemViewFactory = {
  toggleButton: function (event) {
    if (this.subviews("li.new-model").size() > 0) {
      this.removeNewModelView();
    } else {
      this.newModel = new this.collection.model();
      this.newModelView(this.newModel);
    }
  },

  newModelView: function (newModel) {
    var view = new this.form({ collection: this.collection, model: newModel });
    this.addSubview("li.new-model", view);
    this.listenTo(newModel, "sync", this.removeNewModelView.bind(this));
    this.render();
    Backbone.history.navigate(this.newItemRoute);
  },

  removeNewModelView: function () {
    var view = this.subviews("li.new-model").toArray()[0];
    view.$(".new-model-container").addClass("animation-hidepane");
    view.$("form.new-model").addClass("animation-shrinkpane");

    view.$(".new-model-container").bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",
    function () {
      this.removeModelSubview("li.new-model", this.newModel);
      delete this.newModel;
      this.render();
    }.bind(this)
    );
  }
};
