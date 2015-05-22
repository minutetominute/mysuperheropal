require "open-uri"

user = User.create!(email: "thehulk@gmail.com", password: "123456", superhero_name: "The Hulk", avatar: open("http://img.tapatalk.com/d/14/04/10/6u2uqy3e.jpg"))

Food.create!(name: "Uranium", calories: 0, radiation: "123", amount: 1, unit: "gram", protein: 0, fat: 0, carbohydrates: 0, image: open("http://images.alarabiya.net/f1/11/640x392_82134_184055.jpg"))
Food.create!(name: "Banana", calories: 105, radiation: 0.1, amount: 1, unit: "medium", protein: 1.1, fat: 0.3, carbohydrates: 23, image: open("https://www.organicfacts.net/wp-content/uploads/2013/05/Banana3.jpg"))
Food.create!(name: "Brazil Nuts", calories: 186, radiation: 0.2, amount: 1, unit: "ounce", protein: 4.1, fat: 19, carbohydrates: 3.5, image: open("https://nuts.com/images/auto/801x534/assets/e8c4042b13505436.jpg"))

Exercise.create!(name: "Car Press", calories_burned: 1000, amount: 1, unit: "rep", 
								preparation: "Lie underneath car. Lift car over upper chest using wide oblique overhand grip.",
								execution: "Lower car to mid-chest. Press car upward until arms are extended. Repeat.",
								target: "Pectoralis Major, Sternal",
								image: open("https://8e87e529bbed2a6e545e-d8eb574a7c280774526790081ce69970.ssl.cf1.rackcdn.com/6df36869-e999-45ab-977e-7e88c13f549f_zZFwsQEuyVk_lg.jpg"))
Exercise.create!(name: "Global Lap", calories_burned: "1000000", amount: 24901, unit: "mile", 
								preparation: "Wear comfortable running shoes and stretch.", 
								execution: "Run around earth.",
								target: "Cardiovascular",
								image: open("http://i.giphy.com/9j53JL2MRdzaw.gif"))
Exercise.create!(name: "Atlantic Swim", calories_burned: "10000000", amount: 3459, unit: "mile",
								preparation: "Visit the east coast and stretch.",
								execution: "Swim east until you hit land.",
								target: "Cardiovascular",
								image: open("http://i.giphy.com/TFXoCcEemsS1G.gif"))

DiaryEntry.create!(author_id: 1, title: "Did some science today!", body: "So much science!  Also absorbed lots of gamma radiation?!?!", weight: 128)
