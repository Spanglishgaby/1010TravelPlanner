class ReviewsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_invalid_response
    def index
        render json: Review.all, status: :ok
    end

    def show
        review = find_params_id
        render json: review, status: :ok
    end

    def create
        create_review = Review.create!(review_params)
        render json: create_review, status: :created
    end

    def update
        review = find_params_id
        review.update(review_params)
        render json: review
    end
    
    def destroy
        review= find_params_id
        review.destroy
        head :no_content
    end
    

    private
    def review_params
        params.permit(:review,:review_stars,:user_id)
    end

    def find_params_id
        Review.find(params[:id])
    end 

    def render_not_found_response
        render json: { error: "Review not found" }, status: 404
    end
end
