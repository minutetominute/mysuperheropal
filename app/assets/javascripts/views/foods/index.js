Mysuperheropal.Views.FoodsIndex = Mysuperheropal.CompositeView.extend(
	_.extend({}, My_.extend({}, Mysuperheropal.Mixins.Transitionable, {

		template: JST["foods/index"],
		modelTemplate: JST["foods/food-item"],
		collectionSelector: "foods-list",

		initialize: function(options) {
			this.listenTo(this.collection, "sync", this.render)
		},
	})
);
