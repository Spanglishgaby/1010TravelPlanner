class ActivitiesController < ApplicationController

rescue_from ActiveRecord::RecordNotFound, with: :ctivity_not_created
rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    def index 
        render json: Activity.all, status: :ok
    end

    def show 
        find_activity = activity_params_id 
        render json: find_activity, status: :ok
    end

    def create 
        create_activity = Activity.create!(activity_params)
        render json: create_activity, status: :created
    end

    def update
        update_activity = activity_params_id
        update_activity.update(activity_params)
        render json: update_activity, status: :accepted
    end

    def destroy
        destroy_activity = activity_params_id
        destroy_activity.destroy 
        head :no_content
    end

    private

        def activity_params_id
            Activity.find(params[:id]) 
        end

        def activity_params
            params.permit(:description, :price, :user_id, :trip_id)
        end

        def activity_not_created
            render json: {errors: create_activity.errors.full_messages}, status: :unprocessable_entity
        end

        def render_not_found_response
            render json: { error: "Activity not found" }, status: 404
        end

end
