class Api::DiaryEntriesController < ApplicationController
	def show
		@diary_entry = DiaryEntry.find(params[:id])
		render :show
	end

	def index
		@diary_entries = DiaryEntry.all
	end

	def create
		@diary_entry = DiaryEntry.new(diary_entry_params)

		if @diary_entry.save
			render :show
		else
		end
	end

	private

	def diary_entry_params
		params.require(:diary_entry).permit(
			:author_id,
			:title,
			:body,
			:weight
		)
	end
end
