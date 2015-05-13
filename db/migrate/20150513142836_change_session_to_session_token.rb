class ChangeSessionToSessionToken < ActiveRecord::Migration
  def change
    rename_column :users, :session, :session_token
  end
end
