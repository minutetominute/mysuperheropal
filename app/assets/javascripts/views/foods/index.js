Mysuperheropal.Views.FoodsIndex = Backbone.CompositeView.extend(
	_.extend({}, Mysuperheropal.Mixins.Collectable,
	_.extend({}, Mysuperheropal.Mixins.Transitionable,
	_.extend({}, Mysuperheropal.Mixins.ItemViewFactory, {

		events: {
			"click button.new-model": "toggleButton"
		},

		//form configuration
		newItemName: "food",
		form: Mysuperheropal.Views.FoodForm,
		newItemRoute: "foods/new",

		//index configuration
		template: JST["foods/index"],
		itemTemplate: JST["foods/food-item"],
		collectionSelector: ".foods-list",

		//show configuration
		showTemplate: JST["foods/show"],
		showRoute: function () {
			return "foods/" + this.model.id;
		},

		initialize: function(options) {
			Mysuperheropal.Mixins.Collectable.initialize.call(this, options);
		},

	})))
);
