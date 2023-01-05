class ApplicationController < ActionController::API
  include ActionController::Cookies

  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found

  before action 
  before_action :authorized_user 

  # current user and authorized user 
  def current_user
    user = User.find_by(id: session[:user_id])
  end

  def authorized_user
    return render json: {error: "Not Authorized"}, status: :unauthorized unless current_user 
    # if user not logged in will get error 
  end

  private

  def render_unprocessable_entity(invalid)
    render json: {errors: invalid.record.errors}, status: :unprocessable_entity
  end

  def render_not_found
    render json: {errors: {error.model => "Not Found"}}, status: :not_found
  end
end
