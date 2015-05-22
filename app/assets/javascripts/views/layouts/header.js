Mysuperheropal.Views.Header = Backbone.View.extend({
	templates: {
		newSession: JST["layouts/new_session_header"],
		newUser: JST["layouts/new_user_header"],
		signedIn: JST["layouts/signed_in_header"]
	},

	// events: {
	// 	"click a.diary_entries":	function (event) {
	// 		event.preventDefault();
	// 		this.transitionCurrentView(
	// 			Mysuperheropal.Collections.DiaryEntries,
	// 			Mysuperheropal.Collections.diaryEntries,
	// 			Mysuperheropal.Views.DiaryEntriesIndex,
	// 			"diary_entries"
	// 		)
	// 	},
	// 	"click a.foods": function (event) {
	// 		event.preventDefault();
	// 		this.transitionCurrentView(
	// 				Mysuperheropal.Collections.Foods,
	// 				Mysuperheropal.Collections.foods,
	// 				Mysuperheropal.Views.FoodsIndex,
	// 				"foods"
	// 			)
	// 		},
	// 	"click a.exercises": function (event) {
	// 		event.preventDefault();
	// 		this.transitionCurrentView(
	// 			Mysuperheropal.Collections.Exercises,
	// 			Mysuperheropal.Collections.exercises,
	// 			Mysuperheropal.Views.ExercisesIndex,
	// 			"exercises"
	// 		)
	// 	},
	// },

	initialize: function () {
		this.listenTo(Mysuperheropal.currentUser,
				"newUser",
				this.render.bind(this, this.templates.newUser));
		this.listenTo(Mysuperheropal.currentUser,
				"newSession",
				this.render.bind(this, this.templates.newSession));
		this.listenTo(Mysuperheropal.currentUser,
				"signedIn",
				this.render.bind(this, this.templates.signedIn));
		this.$(".logout").on("click", Mysuperheropal.currentUser.signOut);
	},

	render: function (template) {
		var content = template();
		this.$el.html(content);
		return this;
	},

	transitionCurrentView: function (collectionClass, collection, newViewClass, route) {
		if(typeof collection === "undefined") {
			collection = new collectionClass();
		}
		collection.fetch();
		Mysuperheropal.router.transitionTo(collection, newViewClass, route)
	}
});
