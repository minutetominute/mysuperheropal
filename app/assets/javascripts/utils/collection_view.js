Mysuperheropal.Mixins.Collectable = {
	initialize: function(options) {
		this.listenTo(this.collection, "sync", this.render);
		this.listenTo(this.collection, "add", this.addItem);
	},

	render: function() {
		var content = this.template({ newModel: this.newModel });
		this.$el.html(content);
		this.attachSubviews();
		return this;
	},

	addItem: function(item) {
		var view = new Mysuperheropal.Views.ItemShow({ 
			model: item, 
			itemTemplate: this.itemTemplate
		});
		this.addSubview(this.collectionSelector, view);
	}
};
