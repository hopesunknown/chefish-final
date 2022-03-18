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

puts "Seeding meetups..."

mexicanclass = Meetup.create(title: "Mexican Cooking Class", date: "May 1", time: "2pm", location: "Georgetown", topic_id: mexican.id,
    image: "https://myfoodbook.com.au/sites/default/files/styles/car_wd/public/recipe_photo/Enchiladas%20sm.jpg")

thaiclass = Meetup.create(title: "Thai Cooking Class", date: "May 5", time: "1pm", location: "Dupont Circle", topic_id: thai.id,
    image: "https://myfoodbook.com.au/sites/default/files/styles/sr_wd/public/recipe_photo/passage_to_asia_pad_thai.jpeg")

chineseclass = Meetup.create(title: "Chinese Cooking Class", date: "May 2", time: "3pm", location: "Capitol Hill", topic_id: chinese.id,
    image: "https://myfoodbook.com.au/sites/default/files/styles/sr_wd/public/recipe_photo/Chicken_Chow_Mein_0.jpg")

japaneseclass = Meetup.create(title: "Japanese Cooking Class", date: "Apr 1", time: "1pm", location: "Tenleytown", topic_id: japanese.id,
    image: "https://www.happyfoodstube.com/wp-content/uploads/2016/03/homemade-sushi-image.jpg")

italianclass = Meetup.create(title: "Italian Cooking Class", date: "Apr 4", time: "4pm", location: "Friendship Heights", topic_id: italian.id,
    image: "https://myfoodbook.com.au/sites/default/files/styles/sr_wd/public/recipe_photo/Food20167903_0.jpg")

frenchclass = Meetup.create(title: "French Cooking Class", date: "Aug 15", time: "10am", location: "Adams Morgan", topic_id: french.id,
    image: "https://myfoodbook.com.au/sites/default/files/styles/sr_wd/public/recipe_photo/WS_Coq_Au_Vin_V_347_R.jpg")
    

southernclass = Meetup.create(title: "Southern Cooking Class", date: "Jul 10", time: "9am", location: "Navy Yard", topic_id: southern.id,
    image: "https://myfoodbook.com.au/sites/default/files/styles/rc_wd/public/recipe_photo/Southern-Fried-Chicken-with-Maple-Syrup-Waffle.jpg")

spanishclass = Meetup.create(title: "Spanish Cooking Class", date: "Jun 11", time: "3pm", location: "Anacostia", topic_id: spanish.id,
    image: "https://myfoodbook.com.au/sites/default/files/styles/sr_wd/public/recipe_photo/Ardm20158149_0.jpg")

koreanclass = Meetup.create(title: "Korean Cooking Class", date: "Mar 1", time: "4pm", location: "U Street", topic_id: korean.id,
    image: "https://myfoodbook.com.au/sites/default/files/styles/sr_wd/public/recipe_photo/WED%20Korean%20bibambap%200024.jpg")

moroccanclass = Meetup.create(title: "Moroccan Cooking Class", date: "Jul 9", time: "10am", location: "H Street", topic_id: moroccan.id,
    image: "https://myfoodbook.com.au/sites/default/files/styles/sr_wd/public/recipe_photo/P504845ae_0.jpg")

peruvianclass = Meetup.create(title: "Peruvian Cooking Class", date: "Nov 4", time: "7pm", location: "Chinatown", topic_id: peruvian.id,
    image: "https://cdn.vox-cdn.com/uploads/chorus_image/image/63079659/pab.0.jpg")

dutchclass = Meetup.create(title: "Dutch Cooking Class", date: "Sep 9", time: "5pm", location: "Brookland", topic_id: dutch.id,
    image: "https://www.expatica.com/app/uploads/sites/3/2014/05/stamppot.jpg")


puts "Seeding user_meetups..."

meetup1 = UserMeetup.create(user_id: jim.id, meetup_id: mexicanclass.id)
meetup2 = UserMeetup.create(user_id: liz.id, meetup_id: thaiclass.id)
meetup3 = UserMeetup.create(user_id: joe.id, meetup_id: frenchclass.id)
meetup4 = UserMeetup.create(user_id: amy.id, meetup_id: italianclass.id)
meetup5 = UserMeetup.create(user_id: bob.id, meetup_id: japaneseclass.id)
meetup6 = UserMeetup.create(user_id: joy.id, meetup_id: chineseclass.id)

meetup7 = UserMeetup.create(user_id: ana.id, meetup_id: mexicanclass.id)
meetup8 = UserMeetup.create(user_id: dan.id, meetup_id: frenchclass.id)
meetup9 = UserMeetup.create(user_id: cat.id, meetup_id: italianclass.id)
meetup10 = UserMeetup.create(user_id: sam.id, meetup_id: japaneseclass.id)
meetup11 = UserMeetup.create(user_id: ron.id, meetup_id: chineseclass.id)
meetup12 = UserMeetup.create(user_id: vee.id, meetup_id: thaiclass.id)

meetup13 = UserMeetup.create(user_id: jim.id, meetup_id: peruvianclass.id)
meetup14 = UserMeetup.create(user_id: liz.id, meetup_id: dutchclass.id)
meetup15 = UserMeetup.create(user_id: joe.id, meetup_id: southernclass.id)
meetup16 = UserMeetup.create(user_id: amy.id, meetup_id: spanishclass.id)
meetup17 = UserMeetup.create(user_id: bob.id, meetup_id: koreanclass.id)
meetup18 = UserMeetup.create(user_id: joy.id, meetup_id: moroccanclass.id)

meetup19 = UserMeetup.create(user_id: ana.id, meetup_id: dutchclass.id)
meetup20 = UserMeetup.create(user_id: dan.id, meetup_id: southernclass.id)
meetup21 = UserMeetup.create(user_id: cat.id, meetup_id: spanishclass.id)
meetup22 = UserMeetup.create(user_id: sam.id, meetup_id: koreanclass.id)
meetup23 = UserMeetup.create(user_id: ron.id, meetup_id: moroccanclass.id)
meetup24 = UserMeetup.create(user_id: vee.id, meetup_id: peruvianclass.id)