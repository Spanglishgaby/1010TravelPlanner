class User < ApplicationRecord

    has_many :reviews 
    has_many :activities
    has_many :trips, through: :activities

end
