class Activity < ApplicationRecord
  belongs_to :trip
  belongs_to :user

  # validates :description, :price, :trip_id, :user_id, presence: true
end
