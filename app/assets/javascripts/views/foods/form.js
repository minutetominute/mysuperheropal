Mysuperheropal.Views.FoodForm = Backbone.View.extend(
	_.extend({}, Mysuperheropal.Mixins.CollectionViewForm, {
		template: JST["foods/form"]
	})
);
