class ChangeDateToBeStringInTrips < ActiveRecord::Migration[6.1]
  def change
    change_column :trips, :date, :string
  end
end
