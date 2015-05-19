Mysuperheropal.Views.FoodShow = Backbone.View.extend({
	template: JST["foods/show"],

	render: function () {
		var context = this.template({ food: this.model });
		this.$el.html(context);
		return this;
	}
});
