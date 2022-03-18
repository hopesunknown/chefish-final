class TopicSerializer < ActiveModel::Serializer
  attributes :id, :topic_name, :description
end
