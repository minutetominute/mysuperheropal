Mysuperheropal.Collection = Backbone.Collection.extend({
	getOrFetch: function () {
		var model = this.get(id);

		if (model) {
			model.fetch();
		} else {
			model = new this.model();
			model.fetch();
			this.fetch({
				success: function() {
					this.add(model);
				}.bind(this)
			});
		}
		
		return model;
	}
});
