Mysuperheropal.Views.ItemShow = Backbone.View.extend({

	events: {
		"click a": "expandItem"
	},

	initialize: function(options) {
		this.template = options.itemTemplate;
		this.showTemplate = options.showTemplate;
		this.showRoute = options.showRoute;
	},

	render: function () {
		context = this.template({ model: this.model });
		this.$el.html(context);
		return this;
	},

	expandItem: function (event) {
		event.preventDefault();
		var context = this.showTemplate({ model: this.model });
		this.$el.html(context);
		Backbone.history.navigate(this.showRoute());
		return this;
	}

});
