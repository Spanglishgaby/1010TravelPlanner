class Review < ApplicationRecord
  belongs_to :user

  validates :reviews, :review_stars, :user_id, presence: true

end
