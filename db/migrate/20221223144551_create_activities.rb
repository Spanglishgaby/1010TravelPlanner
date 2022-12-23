class CreateActivities < ActiveRecord::Migration[6.1]
  def change
    create_table :activities do |t|
      t.belongs_to :trip, null: false, foreign_key: true
      t.belongs_to :user, null: false, foreign_key: true
      t.text :description
      t.integer :price

      t.timestamps
    end
  end
end
