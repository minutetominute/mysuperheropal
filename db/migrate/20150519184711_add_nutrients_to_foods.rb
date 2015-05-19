class AddNutrientsToFoods < ActiveRecord::Migration
  def change
    nutrients = %w(fibers sugars calcium iron magnesium
                  phosphorus potassium sodium zinc vitamin_c
                  thiamin riboflavin niacin vitamin_b6 folate
                  vitamin_b12 vitamin_a vitamin_e vitamin_d
                  vitamin_k cholesterol)
    nutrients.each do |nutrient|
      add_column :foods, nutrient.to_sym, :float
    end
  end
end
