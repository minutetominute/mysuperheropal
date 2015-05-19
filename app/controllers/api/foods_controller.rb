class Api::FoodsController < ApplicationController
	def show
		@food = Food.find(params[:id])
		render json: @food
	end

	def	index
		@foods = Food.all
	end
end
