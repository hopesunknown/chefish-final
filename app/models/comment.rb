class Comment < ApplicationRecord
    belongs_to :meetup, dependent: :destroy
    belongs_to :user, dependent: :destroy

    # validates :content, presence: true
    # validates :rating, numericality: true
end
