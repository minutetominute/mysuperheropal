class Api::ExercisesController < ApplicationController
	def show
		@diary_entry = DiaryEntry.find(params[:id])
		render json: @diary_entry
	end

	def index
		@diary_entries = DiaryEntry.all
	end
end
