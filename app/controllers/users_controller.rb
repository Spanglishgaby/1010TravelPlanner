class UsersController < ApplicationController

rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
rescue_from ActiveRecord::RecordInvalid, with: :render_invalid_response

wrap_parameters :user, include: [:email, :password, :first_name, :last_name, :phone_number]

# skip_before_action 
    skip_before_action :authorized_user, only: [:create]

    def index
        render json: User.all, status: :ok
    end

    def show
        # find_user = find_params_id
        # find_user = User.find(session[:user_id])
        # render json: find_user, status: :ok
        render json: current_user, status: :ok
    end

    def create
        create_user = User.create!(user_params)
        session[:user_id] = create_user.id 
        render json: create_user, status: :created
    end

    # def update
    #     update_user = find_params_id
    #     update_user.update(user_params)
    #     render json: update_user, status: :ok
    # end

    # def destroy
    #     destroy_user = find_params_id
    #     destroy_user.destroy
    #     head :no_content
    # end

    private

    def user_params
        params.require(:user).permit(:email, :password, :first_name, :last_name, :phone_number) # :first_name, :last_name, :phone_number
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
