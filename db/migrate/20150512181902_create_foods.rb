class CreateFoods < ActiveRecord::Migration
  def change
    create_table :foods do |t|
      t.string :name, null: false
      t.integer :calories, null: false
      t.integer :radiation, null: false
      t.string :picture_url

      t.timestamps null: false
    end
  end
end
