# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Topic.destroy_all
Meetup.destroy_all
UserMeetup.destroy_all
Comment.destroy_all
UserTopic.destroy_all

puts "Seeding users..."

joe = User.create(first_name: "Joe", email: "Joe@joe.com", password: "j")
amy = User.create(first_name: "Amy", email: "Amy@amy.com", password: "a")
bob = User.create(first_name: "Bob", email: "Bob@bob.com", password: "b")
joy = User.create(first_name: "Joy", email: "Joy@joy.com", password: "j")
jim = User.create(first_name: "Jim", email: "Jim@jim.com", password: "j")
liz = User.create(first_name: "Liz", email: "Liz@liz.com", password: "l")

ana = User.create(first_name: "Ana", email: "Ana@ana.com", password: "a")
dan = User.create(first_name: "Dan", email: "Dan@dan.com", password: "d")
cat = User.create(first_name: "Cat", email: "Cat@cat.com", password: "c")
sam = User.create(first_name: "Sam", email: "Sam@sam.com", password: "s")
ron = User.create(first_name: "Ron", email: "Ron@ron.com", password: "r")
vee = User.create(first_name: "Vee", email: "Vee@vee.com", password: "v")

puts "Seeding topics..."

mexican = Topic.create(topic_name: "Mexican", description: "Celebrate food from our southern neighbor")
thai = Topic.create(topic_name: "Thai", description: "Thai chilis are super intense.")
chinese = Topic.create(topic_name: "Chinese", description: "Beef lo mein is a must!")
japanese = Topic.create(topic_name: "Japanese", description: "Everyone loves sushi")
italian = Topic.create(topic_name: "Italian", description: "Make pasta and pizza the right way")
french = Topic.create(topic_name: "French", description: "Say oui to French cuisine")

southern = Topic.create(topic_name: "Southern", description: "Grits and collards")
spanish = Topic.create(topic_name: "Spanish", description: "Try the seafood paella!")
korean = Topic.create(topic_name: "Korean", description: "Gochujang burns through your sinuses.")
moroccan = Topic.create(topic_name: "Indian", description: "Spices on spices on spices!")
peruvian = Topic.create(topic_name: "Peruvian", description: "Mmmm Peruvian chicken.")
dutch = Topic.create(topic_name: "Dutch", description: "Dutch cuisine is very simple...almost everything is fried")