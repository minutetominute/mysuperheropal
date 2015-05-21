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
			if (this.subviews("aside.new-food").size() > 0) {
				var view = this.subviews("aside.new-food").toArray()[0]
				view.$("form").addClass("animation-shrinkfrombottomright");

				view.$("form").bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",
     		function () {
					this.removeModelSubview("aside.new-food", this.newModel);
					delete this.newModel;
					this.render();
      	}.bind(this)
    		);
			} else {
				var newFood = new Mysuperheropal.Models.Food();
				this.newModel = newFood;
				this.newFood(this.newModel);
			}
		},

		newFood: function (newModel) {
			var view = new Mysuperheropal.Views.FoodForm({ collection: this.collection, model: newModel });
			this.addSubview("aside.new-food", view)
			this.render();
		}

	}))
);
