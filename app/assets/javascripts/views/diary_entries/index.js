Mysuperheropal.Views.DiaryEntriesIndex = Backbone.CompositeView.extend(
	_.extend({}, Mysuperheropal.Mixins.Collectable,
	_.extend({}, Mysuperheropal.Mixins.Transitionable,
	_.extend({}, Mysuperheropal.Mixins.ItemViewFactory, {

		events: {
			"click button.new-model": "toggleButton"
		},

		//form configuration
		newItemName: "diary-entry",
		form: Mysuperheropal.Views.DiaryEntryForm,
		newItemRoute: "diary_entries/new",

		//index configuration
		template: JST["diary_entries/index"],
		itemTemplate: JST["diary_entries/diary_entry_item"],
		collectionSelector: ".collection-list",

		//show configuration
		showTemplate: JST["diary_entries/show"],
		showRoute: function () {
			return "diary_entries/" + this.model.id
		},

		initialize: function(options) {
			Mysuperheropal.Mixins.Collectable.initialize.call(this, options);
		},

	})))
);
