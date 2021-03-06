class CommentsController < ApplicationController
    skip_before_action :authorize
    
    def index
        comments = Comment.all
        render json: comments.to_json(
        :include => [:user, :meetup])
    end

    def show 
        comment = find_comment
        render json: comment.to_json(
            :include => [:user, :meetup])
    end

    def create
        comment = Comment.create!(
            # content: params[:comment][:content],
            # user_id: params[:user_id],
            # meetup_id: params[:meetup_id]
            comment_params
        )
        render json: comment
    end
    
    def update
        comment = find_comment
        # user = User.find(comment_params[:user_id])
        # meetup = Meetup.find(comment_params[:meetup_id])

        comment.update!(comment_params)
        render json: comment, status: :ok

        # if comment.valid?
        #     comment.user = user 
        #     comment.meetup = meetup
        # end
    end

    def destroy 
        comment = find_comment
        comment.destroy 
        head :no_content
    end

    private

    def find_comment
        Comment.find(params[:id])
    end

    def comment_params
        params.permit(:user_id, :meetup_id, :content)
    end
end
