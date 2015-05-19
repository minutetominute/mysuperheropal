class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.text :email, null: false
      t.text :password_digest, null: false
      t.text :session_token, null: false
      t.text :superhero_name, null: false

      t.timestamps null: false
    end
  end
end
