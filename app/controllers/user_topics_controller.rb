class UserTopicsController < ApplicationController
    skip_before_action :authorize
end
