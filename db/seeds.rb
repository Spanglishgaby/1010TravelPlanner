# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


puts "seed started"

Activity.destroy_all
Review.destroy_all
Trip.destroy_all
User.destroy_all

# ---------------------------------------------------------------------------------------------------------------------------------------------------

puts "create user"

u1 = User.create(first_name:"Gabriela", last_name:"Arnott", email:"yuriko123@gmail.com", phone_number:5362625612, password:"helloworld")
u2 = User.create(first_name:"Pablo", last_name:"Fuentes", email:"pablo123@gmail.com", phone_number:5333222261, password:"helloworld123")

puts "user created"

# ---------------------------------------------------------------------------------------------------------------------------------------------------

puts "create trips"

t1 = Trip.create(title:"Dominican Republic", description:"something something lots of mango trees", date: "3/15/2023" , total_budget:10000)
t2 = Trip.create(title:"Peru", description:"something something cheap partying", date: "2/15/2023", total_budget:6000)

puts "trips created"

# ---------------------------------------------------------------------------------------------------------------------------------------------------

puts "create activities"

Activity.create(description:"something", price:250, user_id:u2.id, trip_id:t1.id)
Activity.create(description:"something else", price:350, user_id:u1.id, trip_id:t2.id)

puts "activities created"

# ---------------------------------------------------------------------------------------------------------------------------------------------------

puts "create reviews"

Review.create(review:"leave a review", review_stars: 5.0, user_id:u2.id)
Review.create(review:"review our app", review_stars: 4.5, user_id:u1.id)

puts "reviews created"

# ---------------------------------------------------------------------------------------------------------------------------------------------------

puts "end"

