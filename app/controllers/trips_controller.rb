class TripsController < ApplicationController

rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
rescue_from ActiveRecord::RecordInvalid, with: :render_invalid_response

    def index
        render json: Trip.all, status: :ok
    end

    def show
        find_trip = find_params_id
        render json: find_trip, status: :ok
    end

    

    private
    
    def find_params_id
        Trip.find(params[:id])
    end 

    def render_not_found_response
        render json: { error: "Trip not found" }, status: 404
    end

    def render_invalid_response(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end
    
    def render_invalid_response(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end
end
