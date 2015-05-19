user = User.create!(email: "thehulk@gmail.com", password: "123456", superhero_name: "The Hulk")

Food.create!(name: "uranium", calories: 0, radiation: "123", picture_url: "http://upload.wikimedia.org/wikipedia/commons/d/d4/Yellowcake.jpg")
Food.create!(name: "banana", calories: 105, radiation: 1, picture_url: "http://upload.wikimedia.org/wikipedia/commons/1/1c/Bananas_white_background.jpg")
Food.create!(name: "brazil nuts", calories: 186, radiation: 1, picture_url: "https://nuts.com/images/auto/801x534/assets/e8c4042b13505436.jpg")

Exercise.create!(name: "car press", calories_burned: 1000)
Exercise.create!(name: "global lap", calories_burned: "1000000")
Exercise.create!(name: "atlantic swim", calories_burned: "10000000")
