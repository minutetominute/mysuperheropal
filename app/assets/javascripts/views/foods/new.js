Mysuperheropal.Views.FoodNew = Backbone.CompositeView.extend(
	_.extend({}, Mysuperheropal.Mixins.Transitionable, {

    template: JST["foods/new"],

    initialize: function(options) {
      var formView = new Mysuperheropal.Views.FoodForm({
        collection: this.collection,
        model: this.model
      });
      this.addSubview("li.new-model", formView);
    },

    render: function() {
      var content = this.template({ newModel: this.newModel });
      this.$el.html(content);
      this.attachSubviews();
      return this;
    },
	})
);
