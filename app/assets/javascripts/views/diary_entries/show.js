Mysuperheropal.Views.DiaryEntryShow = Backbone.View.extend({
	template: JST["diary_entries/show"],

	render: function () {
		var context = this.template({ model: this.model });
		this.$el.html(context);
		return this;
	}
});
