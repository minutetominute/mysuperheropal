class Api::FoodsController < ApplicationController
	def show
		@food = Food.find(params[:id])
		render :show
	end

	def	index
		@foods = Food.all
	end

	def create
		@food = Food.new(food_params)

		if @food.save
			render :show
		else
		end
	end
	
	private

	def food_params
		params.require(:food).permit(
			:name,
			:author_id,
			:amount,
			:unit,
			:calories,
			:radiation,
			:protein,
			:fat,
			:carbohydrates,
			:fibers,
			:sugars,
			:calcium,
			:iron,
			:magnesium,
			:phosphorus,
			:potassium,
			:sodium, 
			:zinc,
			:vitamin_c,
			:thiamin, 
			:riboflavin,
			:niacin,
			:vitamin_b6,
			:folate,
			:vitamin_b12,
			:vitamin_a,
			:vitamin_e,
			:vitamin_d,
			:vitamin_k,
			:cholesterol,
			:image
		)
	end
end
