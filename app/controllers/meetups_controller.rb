class MeetupsController < ApplicationController
    
    def index 
        meetups = Meetup.all 
        render json: meetups.to_json(:include => [:users, :comments, :topic]), status: :ok
    end

    def show 
        meetup = find_meetup
        render json: meetup.to_json(:include => [:users, {:comments => {:include => :user}}, :topic]), status: :ok
    end

    def create 
        meetup = Meetup.create!(meetup_params)
        UserMeetup.create(user_id: params[:user_id], meetup_id:meetup.id)
        render json: meetup, status: :created
    end

    def edit 
        meetup = find_meetup
    end
    
    def update
        meetup = find_meetup
        user = User.find(meetup_params[:user_ids])
        topic = Topic.find(meetup_params[:topic_id])
        comment = Comment.find(meetup_params[:comment_ids])

        if meetup.valid?
            meetup.users << user unless meetup.users.include? user 
            meetup.comments << comment unless meetup.comments.incliude? comment
            meetup.topic = topic 
        end
    end

    def destroy 
        meetup = find_meetup
        meetup.destroy 
        head :no_content
    end

    private

    def find_meetup
        Meetup.find(params[:id])
    end

    def meetup_params 
        params.require(:meetup).permit(:topic_id,  :comment_ids, :user_ids, :title, :date, :time, :location, :image)
    end
end