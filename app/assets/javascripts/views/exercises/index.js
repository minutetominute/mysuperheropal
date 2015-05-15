Mysuperheropal.Views.ExercisesIndex = Mysuperheropal.CollectionView.extend({

	template: JST["exercises/index"],
	modelTemplate: JST["exercises/exercise-item"],
	collectionSelector: "exercises-list",

	initialize: function(options) {
		this.listenTo(this.collection, "sync", this.render)
	},
});

