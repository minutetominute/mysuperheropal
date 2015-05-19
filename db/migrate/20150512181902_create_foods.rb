class CreateFoods < ActiveRecord::Migration
  def change
    create_table :foods do |t|
      t.string :name, null: false
			t.integer :author_id
      t.float :amount, null: false
  		t.string :unit, :string, null: false
      t.integer :calories, null: false
      t.float :radiation
      t.float :protein, null: false
      t.float :fat, null: false
      t.float :carbohydrates, null: false

      t.timestamps null: false
    end
  end
	add_index :foods, :author_id
end
