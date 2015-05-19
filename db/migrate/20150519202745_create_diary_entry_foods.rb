class CreateDiaryEntryFoods < ActiveRecord::Migration
  def change
    create_table :diary_entry_foods do |t|
			t.integer :diary_entry_id, null: false
			t.integer :food_id, null: false
			t.float :amount, null: false
    end
  end
end
