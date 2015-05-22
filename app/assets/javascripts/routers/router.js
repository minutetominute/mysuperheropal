Mysuperheropal.Routers.Router = Backbone.Router.extend({
  routes: {
    "": "home",
    "signup": "newUserForm",
    "login": "newSessionForm",
    "logout": "logOut",
    "foods" : "foodsIndex",
    "foods/new": "foodForm",
    "foods/:id": "foodShow",
    "exercises": "exercisesIndex",
    "exercises/new": "exerciseForm",
    "exercises/:id": "exerciseShow",
		"diary": "diaryEntryIndex",
    "diary_entries/new": "diaryEntryForm",
  },

  initialize: function(options) {
    this.$rootEl = options.$rootEl;
  },

  newUserForm: function () {
		Mysuperheropal.currentUser.trigger("newUser");
    var view = new Mysuperheropal.Views.NewUserForm();
    this._swapView(view);
  },

  newSessionForm: function (callback) {
		Mysuperheropal.currentUser.trigger("newSession");
    var view = new Mysuperheropal.Views.NewSessionForm({
      callback: callback
    });
    this._swapView(view);
  },

  home: function () {
    var callback = this.home.bind(this);
    Mysuperheropal.currentUser.fetch({
      success: function () {
        if (!this._requireSignedIn(callback)) { return; }

        var view = new Mysuperheropal.Views.Home();
        this._swapView(view);
      }.bind(this)
    });
  },

  logOut: function() {
    Mysuperheropal.currentUser.signOut();
    Backbone.history.navigate("login", { trigger: true });
  },

	foodsIndex: function () {
		Mysuperheropal.Collections.foods = new Mysuperheropal.Collections.Foods();
		Mysuperheropal.Collections.foods.fetch();
		var view = new Mysuperheropal.Views.FoodsIndex({
			collection: Mysuperheropal.Collections.foods
		});
		this._swapView(view);
	},

	foodShow: function (id){
		this.getOrCreateFoods();
		var food = Mysuperheropal.Collections.foods.getOrFetch(id);
		var view = new Mysuperheropal.Views.FoodShow({
			model: food
		});

		this._swapView(view);
	},

	foodForm: function(){
    this.getOrCreateFoods();
		var food = new Mysuperheropal.Models.Food();
		var view = new Mysuperheropal.Views.FoodNew({ model: food,
      collection: Mysuperheropal.Collections.foods
    });
		this._swapView(view);
	},

	exercisesIndex: function () {
		Mysuperheropal.Collections.exercises = new Mysuperheropal.Collections.Exercises();
		Mysuperheropal.Collections.exercises.fetch();
		var view = new Mysuperheropal.Views.ExercisesIndex({
			collection: Mysuperheropal.Collections.exercises
		});

		this._swapView(view);
	},

  exerciseShow: function (id){
    this.getOrCreateExercises();
		var exercise = Mysuperheropal.Collections.exercises.getOrFetch(id);
		var view = new Mysuperheropal.Views.ExerciseShow({
			model: exercise
		});

		this._swapView(view);
	},

	exerciseForm: function(){
		var exercise = new Mysuperheropal.Models.Exercise();
		var view = new Mysuperheropal.Views.ExerciseNew({
      model: exercise,
      collection: Mysuperheropal.Collections.exercises
    });
		this._swapView(view);
	},

  diaryEntryIndex: function() {
    Mysuperheropal.Collections.diaryEntries = new Mysuperheropal.Collections.DiaryEntries();
		Mysuperheropal.Collections.diaryEntries.fetch();
		var view = new Mysuperheropal.Views.DiaryEntriesIndex({
			collection: Mysuperheropal.Collections.diaryEntries
		});
		this._swapView(view);
  },

  diaryEntryForm: function(){
		var diaryEntry = new Mysuperheropal.Models.DiaryEntry();
		var view = new Mysuperheropal.Views.DiaryEntryNew({
      model: diaryEntry,
      collection: Mysuperheropal.Collections.diaryEntries
    });
		this._swapView(view);
	},

  getOrCreateExercises: function() {
    if (!Mysuperheropal.Collections.exercises) {
      Mysuperheropal.Collections.exercises = new Mysuperheropal.Collections.Exercises();
    }
  },

  getOrCreateFoods: function () {
    if (!Mysuperheropal.Collections.foods) {
			Mysuperheropal.Collections.foods = new Mysuperheropal.Collections.Foods();
		}
  },

	setCurrentView: function(view) {
    this._currentView = view;
  },

  _requireSignedIn: function(callback){
    if (!Mysuperheropal.currentUser.isSignedIn()) {
      callback = callback || this._goHome.bind(this);
      this.newSessionForm(callback);
      return false;
    }

    return true;
  },

  _goHome: function(){
    Backbone.history.navigate("", { trigger: true });
  },

  _swapView: function (newView) {
    this._currentView && this._currentView.remove();
    this._currentView = newView;
    this.$rootEl.html(newView.render().$el);
  }
});
