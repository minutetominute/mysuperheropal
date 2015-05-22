Mysuperheropal.Views.DiaryEntriesIndex = Backbone.CompositeView.extend(
	_.extend({}, Mysuperheropal.Mixins.Collectable,
	_.extend({}, Mysuperheropal.Mixins.Transitionable,
	_.extend({}, Mysuperheropal.Mixins.ItemViewFactory, {

		events: {
			"click button.new-model": "toggleButton"
		},

		newItemName: "diary-entries",
		form: Mysuperheropal.Views.ExerciseForm,
		newItemRoute: "diary_entries/new",
		template: JST["diary_entries/index"],
		itemTemplate: JST["diary-entry/diary-entry-item"],
		collectionSelector: ".diary-entries-list",

		initialize: function(options) {
			Mysuperheropal.Mixins.Collectable.initialize.call(this, options);
		},

	})))
);
