Mysuperheropal.Views.ItemShow = Backbone.View.extend({
	
	events: {
		"mouseover a": "fetchItemData",
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

	fetchItemData: function (event) {
		this.model.fetch();
	},

	expandItem: function (event) {
		event.preventDefault();

	}	
});
