class User < ApplicationRecord

    has_many :reviews, dependent: :destroy
    has_many :activities
    has_many :trips, through: :activities
    has_secure_password # line 2 of three to enable database to store hashes 

    validates :first_name, :last_name, :email, presence: true
    validates :email, uniqueness: true
    # validates :password, required: true
    validates :password, confirmation: true
    validates :password, length: { minimum: 10 }

end
