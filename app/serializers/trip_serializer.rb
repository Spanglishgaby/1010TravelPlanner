class TripSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :date, :total_budget
end
