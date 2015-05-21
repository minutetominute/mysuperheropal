class AddImagesToFoodsAndExercises < ActiveRecord::Migration
  def change
		add_attachment :foods, :image
		add_attachment :exercises, :image
  end
end
