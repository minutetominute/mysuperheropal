Mysuperheropal.Views.DiaryEntryForm = Backbone.View.extend(
	_.extend({}, Mysuperheropal.Mixins.CollectionViewForm, {
		template: JST["diary_entries/form"]
	})
);
