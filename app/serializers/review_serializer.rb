class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :review, :review_stars, :user_id
  # has_one :user
end
