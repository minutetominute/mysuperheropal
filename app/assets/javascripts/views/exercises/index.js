Mysuperheropal.Views.ExercisesIndex = Backbone.CompositeView.extend(
	_.extend({}, Mysuperheropal.Mixins.Collectable,
	_.extend({}, Mysuperheropal.Mixins.Transitionable,
	_.extend({}, Mysuperheropal.Mixins.ItemViewFactory, {

		events: {
			"click button.new-model": "toggleButton"
		},

		newItemName: "exercise",
		form: Mysuperheropal.Views.ExerciseForm,
		newItemRoute: "exercises/new",
		template: JST["exercises/index"],
		itemTemplate: JST["exercises/exercise-item"],
		collectionSelector: ".exercises-list",

		initialize: function(options) {
			Mysuperheropal.Mixins.Collectable.initialize.call(this, options);
		},

	})))
);
