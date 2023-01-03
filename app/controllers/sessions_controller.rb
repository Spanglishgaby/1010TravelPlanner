class SessionsController < ApplicationController

    def create
        user = User.find_by(email: params[:email])
        if user&.authenticate(params[:password])
        session[:user_id] = user.id 
        byebug
        render json: user, status: :ok
        else
            render json:{error: "Invalid Email or Password"}
        end
    end
end



