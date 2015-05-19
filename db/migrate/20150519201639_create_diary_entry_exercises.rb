class CreateDiaryEntryExercises < ActiveRecord::Migration
  def change
    create_table :diary_entry_exercises do |t|
			t.integer :diary_entry_id, null: false
			t.integer :exercise_id, null: false
			t.integer :sets
			t.integer :reps
			t.time :time
    end
		add_index :diary_entry_exercises, :diary_entry_id
  end
end
