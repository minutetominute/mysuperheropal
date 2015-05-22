Mysuperheropal.Models.Exercise = Backbone.Model.extend({
	urlRoot: "api/exercises",

	toJSON: function () {
		var json = { exercise: _.clone(this.attributes) };

		if (this._image) {
      json.exercise.image = this._image;
    }

		if (this._author_id) {
			json.exercise.author_id = this._author_id;
		}

		return json;
	}
});
