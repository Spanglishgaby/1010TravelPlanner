class CreateTrips < ActiveRecord::Migration[6.1]
  def change
    create_table :trips do |t|
      t.string :title
      t.text :description
      t.date :date
      t.integer :total_budget

      t.timestamps
    end
  end
end
