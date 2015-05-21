Mysuperheropal.Views.FoodForm = Backbone.View.extend({
	template: JST["foods/form"],

	events: {
		"click form": function (event) { event.stopPropagation(); },
		"submit form": "submitFood"
	},

	render: function () {
		var context = this.template();
		this.$el.html(context);
		return this;
	},

	submitFood: function (event) {
		event.preventDefault();
		var params = $(event.currentTarget).serializeJSON();

		this.model.set(params);
		
		this.model.save({}, {
			success: function () {
				this.collection.unshift(this.model);
			}.bind(this)
		});
	}
});
