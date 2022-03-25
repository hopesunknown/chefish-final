class SessionsController < ApplicationController
    skip_before_action :authorize, only: :login

    def login
            user = User.find_by(email: params[:email])
            if user&.authenticate(params[:password])
                session[:user_id] = user.id
                render json: user, status: :ok
            else
                render json: { errors: ["Invalid email or password"] }, status: :unauthorized
            end
    end

    def logout
        session.delete :user_id
        head :no_content
    end

end

    # skip_before_action :authorize, only: :login

#     def login
#         user = User.find_by(first_name: params[:first_name])
#         # if user&.authenticate(params[:password])
#         #     session[:user_id] = user.id
#         #     render json: user, status: :created
#         # else 
#         #     render json: {message: "Invalid username or password"}, status: :unauthorized
#         # end 
#     # end
#     if user && user.password === params[:password]
#         session[:id] = user.id

#         render json: user
#     else 
#         render json: {message: "error"}
#     end 
# end

#     def logout
#         session.delete :user_id
#         head :no_content
#     end
# end
