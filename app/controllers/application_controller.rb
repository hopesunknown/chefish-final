class ApplicationController < ActionController::API
  include ActionController::Cookies

  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

  before_action :authorize

  def current_user
    User.find_by(id: session[:user_id])
  end
  
  def authorize
    render json: { errors: ["Not authorized"] }, status: :unauthorized unless current_user
  end

  private

  def render_invalid_response(invalid)
    render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
  end

  def render_not_found_response(error)
    render json: { error: "#{error.model} not found" }, status: :not_found
  end

end

#   private

#   def authorize
#     @current_user = User.find_by(id: session[:user_id])

#     render json: { errors: ["Not authorized"] }, status: :unauthorized unless @current_user
#   end

#   def render_unprocessable_entity_response(invalid)
#       render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
#   end




    # before_action :authorized
    # # helper_method :current_user 
    # # helper_method :logged_in?
    
    # def index
    # end

    # def current_user
    #     User.find_by(id: session[:user_id])
    # end

    # def logged_in?
    #     !current_user.nil?
    # end

    # def authorized 
    #     # redirect_to '/login' unless logged_in?
    # end

# end
