Mysuperheropal.Mixins.Collectable = {
	initialize: function(options) {
		this.listenToOnce(this.collection, "sync", this.renderAndListen);
	},

	renderAndListen: function () {
		this.collection.forEach(function (model) {
			var view = new Mysuperheropal.Views.ItemShow({
				model: model,
				itemTemplate: this.itemTemplate,
				showTemplate: this.showTemplate,
				showRoute: this.showRoute
			});
			this.addSubview(this.collectionSelector, view, true);

		}.bind(this));
		this.listenTo(this.collection, "add", this.addItem);
		this.render();
		this.trigger("render");
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
		this.addSubview(this.collectionSelector, view, true);
	}
};
