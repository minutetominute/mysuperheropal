Mysuperheropal.Views.ExercisesIndex = Backbone.CompositeView.extend(
	_.extend({}, Mysuperheropal.Mixins.Collectable,
	_.extend({}, Mysuperheropal.Mixins.Transitionable, {

		events: {
			"click button.new-exercise": "toggleButton"
		},

		template: JST["exercises/index"],
		itemTemplate: JST["exercises/exercise-item"],
		collectionSelector: ".exercises-list",

		initialize: function(options) {
			Mysuperheropal.Mixins.Collectable.initialize.call(this, options);
		},

		toggleButton: function (event) {
			if (this.subviews("li.new-exercise").size() > 0) {
				this.removeNewModelView();
			} else {
				var newExercise = new Mysuperheropal.Models.Exercise();
				this.newModel = newExercise;
				this.newExercise(this.newModel);
			}
		},

		newExercise: function (newModel) {
			var view = new Mysuperheropal.Views.ExerciseForm({ collection: this.collection, model: newModel });
			this.addSubview("li.new-exercise", view);
			this.listenTo(newModel, "sync", this.removeNewModelView.bind(this));
			this.render();

			Backbone.history.navigate("exercises/new");
		},

		removeNewModelView: function () {
			var view = this.subviews("li.new-exercise").toArray()[0];
			view.$(".new-model-container").addClass("animation-hidepane");
			view.$("form.new-model").addClass("animation-shrinkpane");

			view.$(".new-model-container").bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",
			function () {
				this.removeModelSubview("li.new-exercise", this.newModel);
				delete this.newModel;
				this.render();
			}.bind(this)
			);
		}

	}))
);
