Mysuperheropal.Views.ItemShow = Backbone.View.extend({
	
	initialize: function(options) {
		this.template = options.itemTemplate;
	},

	render: function () {
		context = this.template({ model: this.model });
		this.$el.html(context);
		return this;
	}
});
