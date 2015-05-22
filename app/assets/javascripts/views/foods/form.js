Mysuperheropal.Views.FoodForm = Backbone.View.extend({
	template: JST["foods/form"],

	events: {
		"click .edit-image": "editImage",
		"click form": function (event) { event.stopPropagation(); },
		"submit form": "submitFood",
		"change input.upload": "fileInputChange"
	},

	render: function () {
		var context = this.template();
		this.$el.html(context);
		return this;
	},

	submitFood: function (event) {
		event.preventDefault();
		var params = $(event.currentTarget).serializeJSON();

		this.model.set(params);

		this.model.save({}, {
			success: function () {
				this.collection.unshift(this.model);
			}.bind(this)
		});
	},

	editImage: function(event) {
		event.preventDefault();
		this.$("input.upload").trigger("click");
	},

	fileInputChange: function (event) {
		var file = event.currentTarget.files[0];
		var reader = new FileReader();

		reader.onloadend = function () {
			this._updatePreview(reader.result);
			this.$("figure.edit-image").addClass("img-loaded");
			this.model._image = reader.result;
		}.bind(this);

		if (file) {
			reader.readAsDataURL(file);
		} else {
			this._updatePreview("");
			delete this.model._image;
		}
	},

	_updatePreview: function(src) {
		this.$(".preview").attr("src", src);
	}
});
