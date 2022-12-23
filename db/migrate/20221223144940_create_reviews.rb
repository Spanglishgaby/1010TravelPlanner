class CreateReviews < ActiveRecord::Migration[6.1]
  def change
    create_table :reviews do |t|
      t.text :review
      t.float :review_stars
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
