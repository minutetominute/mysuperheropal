class CreateDiaryEntryExerciseParticipants < ActiveRecord::Migration
  def change
    create_table :diary_entry_exercise_participants do |t|
			t.integer :diary_entry_exercise_id, null: false
			t.integer :participant_id, null: false
    end
  end
end
