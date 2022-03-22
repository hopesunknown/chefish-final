class Topic < ApplicationRecord
    has_many :user_topics
    has_many :users, through: :user_topics
    has_many :meetups

    # validates :topic_name, presence: true
    # validates :description, uniqueness: true
end