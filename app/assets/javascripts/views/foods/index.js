Mysuperheropal.Views.FoodsIndex = Mysuperheropal.CollectionView.extend({

	template: JST["foods/index"],
	modelTemplate: JST["foods/food-item"],
	collectionSelector: "foods-list",

	initialize: function(options) {
		this.listenTo(this.collection, "sync", this.render)
	},
	
});
