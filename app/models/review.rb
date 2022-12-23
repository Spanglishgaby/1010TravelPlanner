class Review < ApplicationRecord
  belongs_to :user

  validates :review, :review_stars, :user_id, presence: true

end
