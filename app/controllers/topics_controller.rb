class TopicsController < ApplicationController
    skip_before_action :authorize, only: (:create, :update)

    def index
        topics = Topic.all 
        render json: topics.to_json(:include => [:meetups, :users])
    end

    def show 
        topic = find_topic
        render json: topic.to_json(:include => [:meetups, :users])
    end

    def create 
        topic = Topic.create!(
            topic_name: params[:topic][:topic_name],
            description: params[:topic][:topic_description]
        )
        render json: topic
    end

    def edit 
        topic = find_topic
    end
    
    def update
        topic = find_topic
        user = User.find(topic_params[:user_ids])
        meetup = Meetup.find(topic_params[:meetup_ids])

        if topic.valid?
            topic.users << user unless topic.users.include? user 
            topic.meetups << meetup unless topic.meetups.include? meetup
        end
    end

    def destroy
        topic = find_topic
        topic.destroy 
        head :no_content
    end

    private

    def find_topic
        Topic.find(params[:id])
    end

    def topic_params
        params.require(:topic).permit(:meetup_ids, :user_ids, :topic_name, :description)
    end
end
