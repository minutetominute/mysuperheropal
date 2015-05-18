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

		toggleButton: function(event) {
			if (this.subviews("aside.new-exercise").size() > 0) {
				this.removeModelSubview("aside.new-exercise", this.newModel);
				delete this.newModel;
				this.render();
			} else {
				var newExercise = new Mysuperheropal.Models.Exercise();
				this.newModel = newExercise;
				this.newExercise(this.newModel);
			}
		},
		
		newExercise: function (newModel) {
			var view = new Mysuperheropal.Views.ExerciseForm({ model: newModel });
			this.addSubview("aside.new-exercise", view);
			this.render();
		}
	
	}))
);

