class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :review, :review_stars
  has_one :user
end
