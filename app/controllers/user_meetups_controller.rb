class UserMeetupsController < ApplicationController

    def index
        render json: UserMeetup.all
    end

end
