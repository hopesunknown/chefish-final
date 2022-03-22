class Meetup < ApplicationRecord
    has_many :user_meetups
    has_many :users, through: :user_meetups
    belongs_to :topic, dependent: :destroy, optional: true
    has_many :comments

    # validates :title, presence: true
    # validates :date, presence: true
    # validates :time, presence: true
end