class CommentSerializer < ActiveModel::Serializer
  attributes :id, :content, :rating, :user_id, :meetup_id
end
