class Trip < ApplicationRecord

    has_many :activities 
    has_many :users, through: :activities 

    validates :title, :description, :date, :total_budget, presence: true

end
