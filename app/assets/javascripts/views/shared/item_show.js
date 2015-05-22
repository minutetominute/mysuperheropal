Mysuperheropal.Views.ItemShow = Backbone.View.extend({

	events: {
		"click a": "expandItem"
	},

	initialize: function(options) {
		this.template = options.itemTemplate;
	},

	render: function () {
		context = this.template({ model: this.model });
		this.$el.html(context);
		return this;
	},

	expandItem: function (event) {
		event.preventDefault();
		var context = JST["foods/show"]({ model: this.model });
		this.$el.html(context);
		return this;
	}

});
