class Api::ExercisesController < ApplicationController
	def show
		@exercise = Food.find(params[:id])
		render :show
	end

	def index
		@exercises = Exercise.all
	end

	def create
		@exercise = Exercise.new(exercise_params)

		if @exercise.save
			render :show
		else
		end
	end

	private

	def exercise_params
		params.require(:exercise).permit(
			:name,
			:author_id,
			:amount,
			:unit,
			:calories_burned,
			:preparation,
			:execution,
			:target,
			:image
		)
	end
end
