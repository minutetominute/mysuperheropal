Mysuperheropal.Views.ExerciseForm = Backbone.View.extend(
	_.extend({}, Mysuperheropal.Mixins.CollectionViewForm, {
		template: JST["exercises/form"]
	})
);
