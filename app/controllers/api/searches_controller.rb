class Api::SearchesController < ApplicationController
	def index
		query = params[:query]
		foods_results = Food.search(query)
		exercises_results = Exercise.search(query)
		begin
			foods = foods_results.records.to_a
		rescue
			foods = [];
		end
		begin
			exercises = exercises_results.records.to_a
		rescue
			exercises = []
		end
		@results = {foods: foods, exercises: exercises}
		render json: @results
	end
end
