class UsersController < ApplicationController
    skip_before_action :authorize, only: [:new, :save, :create, :login, :show]
    
    def index
        # users = User.all
        # render json: users.to_json(
        #     :include => [:topics, {:meetups => {:include => :topic}}, :comments])
        render json: current_user.to_json(
            :include => [:topics, {:meetups => {:include => :topic}}, :comments])
    end

    def login
        user = User.find_by(first_name: params[:first_name])
        if user && user.password === params[:password]
            session[:id] = user

            render json: user
        else 
            render json: {message: "error"}
        end 
    end

    def show
        # user = User.find(params[:id])
        # render json: user.to_json(
        #     :include => [:topics, {:meetups => {:include => :topic}}, :comments])

        render json: current_user.to_json(
                :include => [:topics, {:meetups => {:include => :topic}}, :comments])
    end
    
    def create
        # user = User.new(user_params)
        # user.save
        user = User.create(user_params)
        session[:user_id] = user.id
        params["topicArray"].each do |topic| 
        # UserTopic.create(user_id: user.id, topic_id: topic.id)
        usertopic = UserTopic.find_by(user_id: params[:user_id], topic_id: params[:topic_id])
        usertopic.create
        end

        if user.valid?
        render json: user
        else  
            render json: {error: "Failed to create user"}
        end
    end

    # def edit
    #     user = User.find(params[:id])
    # end
    
    def update
        user = User.find(params[:id])
        topic = Topic.find(user_params[:topic_ids])
        meetup = User.find(user_params[:meetup_ids])
        comment = Comment.find(user_params[:comment_ids])

        if user.valid?
            user.topics << topic unless user.topics.include? topic 
            user.meetups << meetup unless user.meetups.include? meetup 
            user.comments << comment unless user.comments.include? comment 
        end
    end

    def joinMeetup 
        UserMeetup.find_or_create_by(user_id: params[:user_id], meetup_id: params[:meetup_id])
        
    end

    def leaveMeetup
        um = UserMeetup.find_by(user_id: params[:user_id], meetup_id: params[:meetup_id])
        um.destroy
        head :no_content
    end

    def deleteTopic
        topic = UserTopic.find_by(user_id: params[:user_id], topic_id: params[:topic_id])
        # topic = UserTopic.find(params[:user_id, :topic_id])
        topic.destroy
        head :no_content
    end

    def destroy
        user = User.find(params[:id])
        user.destroy 
        render json: user
    end

    private 

    # def user_meetup_params
    #     params.permit(:user_id, :meetup_id)
    # end

    def user_params
        params.permit(:topic_ids, :meetup_ids, :comment_ids, :first_name, :email, :password, :topicArray)
    end
end