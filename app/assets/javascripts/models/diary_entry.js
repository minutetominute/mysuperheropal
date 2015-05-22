Mysuperheropal.Models.DiaryEntry = Backbone.Model.extend({
	urlRoot: "api/diary_entries",

	toJSON: function () {
		var json = _.clone(this.attributes);

		if (this._author_id) {
			json.diary_entry.author_id = this._author_id;
		}

		return json;
	}
});
