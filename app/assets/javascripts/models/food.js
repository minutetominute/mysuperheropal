Mysuperheropal.Models.Food = Backbone.Model.extend({
	urlRoot: "api/foods",

	toJSON: function () {
		var json = _.clone(this.attributes);

		if (this._image) {
      json.food.image = this._image;
    }

		if (this._author_id) {
			json.food.author_id = this._author_id;
		}

		return json;
	}
});
