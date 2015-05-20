class Api::ExercisesController < ApplicationController
	def show
		@exercise = Food.find(params[:id])
		render json: @exercise
	end

	def index
		@exercises = Exercise.all
	end
end
