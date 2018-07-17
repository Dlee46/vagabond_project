# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Post.destroy_all
City.destroy_all

atlanta = City.new
atlanta.name = "Atlanta"
atlanta.image = "https://lh3.googleusercontent.com/hLkjLFzbyjJwXKLB5GwL0zPEfb0uVY3V8KgEwGY3kPRkZ6qSEVDnLraeT8A8NmnOwsb6ZDE=s170"
atlanta.save


post1 = atlanta.posts.create(title: "East Atlanta", description: "It's dope/lit")