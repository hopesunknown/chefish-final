class UserTopicSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :topic_id
end
