Mysuperheropal.Views.ExerciseForm = Backbone.View.extend({
	template: JST["exercises/form"],

	events: {
		"click form": function (event) { event.stopPropagation() }
	},

	render: function () {
		var context = this.template();
		this.$el.html(context);
		return this;
	}		
});

