user = User.create!(email: "thehulk@gmail.com", password: "123456", superhero_name: "The Hulk")

Food.create!(name: "uranium", calories: 0, radiation: "123")
Food.create!(name: "banana", calories: 105, radiation: 1)
Food.create!(name: "brazil nuts", calories: 186, radiation: 1)

Exercise.create!(name: "car press", calories_burned: 1000)
Exercise.create!(name: "global lap", calories_burned: "1000000")
Exercise.create!(name: "atlantic swim", calories_burned: "10000000")
