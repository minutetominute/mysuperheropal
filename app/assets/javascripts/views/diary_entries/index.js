Mysuperheropal.Views.DiaryEntriesIndex = Backbone.CompositeView.extend(
	_.extend({}, Mysuperheropal.Mixins.Collectable,
	_.extend({}, Mysuperheropal.Mixins.Transitionable,
	_.extend({}, Mysuperheropal.Mixins.ItemViewFactory, {

		events: {
			"click button.new-model": "toggleButton"
		},

		newItemName: "diary-entry",
		form: Mysuperheropal.Views.DiaryEntryForm,
		newItemRoute: "diary_entries/new",
		template: JST["diary_entries/index"],
		itemTemplate: JST["diary_entries/diary_entry_item"],
		collectionSelector: ".collection-list",

		initialize: function(options) {
			Mysuperheropal.Mixins.Collectable.initialize.call(this, options);
		},

	})))
);
