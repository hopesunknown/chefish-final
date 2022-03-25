class UserMeetupsController < ApplicationController
    skip_before_action :authorize
    
    def index
        render json: UserMeetup.all
    end

end
