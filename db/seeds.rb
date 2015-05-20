user = User.create!(email: "thehulk@gmail.com", password: "123456", superhero_name: "The Hulk")

Food.create!(name: "Uranium", calories: 0, radiation: "123", amount: 1, unit: "gram", protein: 0, fat: 0, carbohydrates: 0)
Food.create!(name: "Banana", calories: 105, radiation: 0.1, amount: 1, unit: "medium", protein: 1.1, fat: 0.3, carbohydrates: 23)
Food.create!(name: "Brazil Nuts", calories: 186, radiation: 0.2, amount: 1, unit: "ounce", protein: 4.1, fat: 19, carbohydrates: 3.5)

Exercise.create!(name: "Car Press", calories_burned: 1000, amount: 1, unit: "rep", 
								preparation: "Lie underneath car. Lift car over upper chest using wide oblique overhand grip.",
								execution: "Lower car to mid-chest. Press car upward until arms are extended. Repeat.",
								target: "Pectoralis Major, Sternal")
Exercise.create!(name: "Global Lap", calories_burned: "1000000", amount: 24901, unit: "mile", 
								preparation: "Wear comfortable running shoes and stretch.", 
								execution: "Run around earth.",
								target: "Cardiovascular")
Exercise.create!(name: "Atlantic Swim", calories_burned: "10000000", amount: 3459, unit: "mile",
								preparation: "Visit the east coast and stretch.",
								execution: "Swim east until you hit land.",
								target: "Cardiovascular")
