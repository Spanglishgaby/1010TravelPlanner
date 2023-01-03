class ChangePasswordToPasswordDigest < ActiveRecord::Migration[6.1]
  def change
    rename_column :users, :password, :password_digest 
    # changes password in User migration to password_digest 
  end
end
