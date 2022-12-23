class ActivitySerializer < ActiveModel::Serializer
  attributes :id, :description, :price
  has_one :trip
  has_one :user
end
