Mysuperheropal.Views.FoodsIndex = Backbone.CompositeView.extend(
	_.extend({}, Mysuperheropal.Mixins.Collectable,
	_.extend({}, Mysuperheropal.Mixins.Transitionable, {

		events: {
			"click button.new-food": "toggleButton" 
		},

		template: JST["foods/index"],
		itemTemplate: JST["foods/food-item"],
		collectionSelector: ".foods-list",

		initialize: function(options) {
			Mysuperheropal.Mixins.Collectable.initialize.call(this, options);
		},
		
		toggleButton: function (event) {
			if (this.subviews("li.new-food").size() > 0) {
				this.removeNewModelView();
			} else {
				var newFood = new Mysuperheropal.Models.Food();
				this.newModel = newFood;
				this.newFood(this.newModel);
			}
		},

		newFood: function (newModel) {
			var view = new Mysuperheropal.Views.FoodForm({ collection: this.collection, model: newModel });
			this.addSubview("li.new-food", view);
			this.listenTo(newModel, "sync", this.removeNewModelView.bind(this));
			this.render();
			Backbone.history.navigate("foods/new");
		},

		removeNewModelView: function () {
			var view = this.subviews("li.new-food").toArray()[0];
			view.$(".new-food-container").addClass("animation-hidepane");
			view.$("form.new-food").addClass("animation-shrinkpane");

			view.$(".new-food-container").bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",
			function () {
				this.removeModelSubview("li.new-food", this.newModel);
				delete this.newModel;
				this.render();
			}.bind(this)
			);
		}

	}))
);
