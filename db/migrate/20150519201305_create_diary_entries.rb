class CreateDiaryEntries < ActiveRecord::Migration
  def change
    create_table :diary_entries do |t|
			t.integer :author_id, null: false
			t.string :title
			t.text :body
			t.float :weight
    end
    add_index :diary_entries, :author_id
  end
end
