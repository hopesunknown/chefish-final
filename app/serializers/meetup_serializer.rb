class MeetupSerializer < ActiveModel::Serializer
  attributes :id, :title, :date, :time, :location, :topic_id, :topic_name, :image
end
