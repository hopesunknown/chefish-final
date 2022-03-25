class User < ApplicationRecord
    has_many :user_meetups
    has_many :user_topics
    has_many :topics, through: :user_topics
    has_many :meetups, through: :user_meetups
    has_many :comments

    has_secure_password

    validates :first_name, presence: true, uniqueness: true
    validates :email, presence: true, uniqueness: true
 
end