Mysuperheropal.CollectionView = Backbone.View.extend({
	render: function () {
		var context = this.template({collection: this.collection});
		this.$el.html(context);
		this.collection.models.forEach(function (model) {
			var modelContext = this.modelTemplate({ model: model });
			this.$("." + this.collectionSelector).append(modelContext)
		}.bind(this));
		return this;
	}
});
