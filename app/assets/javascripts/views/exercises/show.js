Mysuperheropal.Views.FoodShow = Backbone.View.extend({
	template: JST["exercises/show"],

	render: function () {
		var context = this.template({ food: this.model });
		this.$el.html(context);
		return this;
	}
});
