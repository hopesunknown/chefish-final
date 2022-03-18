class UserMeetupSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :meetup_id
end
