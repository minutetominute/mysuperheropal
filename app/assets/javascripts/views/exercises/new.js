Mysuperheropal.Views.ExerciseNew = Backbone.CompositeView.extend(
	_.extend({}, Mysuperheropal.Mixins.Transitionable, {

    template: JST["exercises/new"],

    initialize: function(options) {
      var formView = new Mysuperheropal.Views.ExerciseForm({
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
