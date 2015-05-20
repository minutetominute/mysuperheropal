class CreateExercises < ActiveRecord::Migration
  def change
    create_table :exercises do |t|
      t.string :name, null: false
      t.integer :author_id
      t.integer :calories_burned, null: false
      t.float :amount, null: false
  		t.string :unit, null: false
      t.text :preparation
  		t.text :execution
  		t.string :target

      t.timestamps null: false
    end
    add_index :exercises, :author_id
  end
end
