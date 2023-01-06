class UsersController < ApplicationController

rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
rescue_from ActiveRecord::RecordInvalid, with: :render_invalid_response

#  skip_before_action 
    wrap_parameters :user, include: [:first_name, :last_name, :email, :password, :phone_number]
    skip_before_action :authorized_user, only: [:create]

    def index
        render json: User.all, status: :ok
    end

    def show
        render json: current_user, status: :ok
    end

    def create
        create_user = User.create!(user_params)
        render json: create_user, status: :created
    end

    private

    def user_params
        params.require(:user).permit(:first_name, :last_name, :email, :password, :phone_number)
    end

    def find_params_id
        User.find(params[:id])
    end 

    def render_not_found_response
        render json: { error: "User not found" }, status: 404
    end

    def render_invalid_response(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end
end
