export interface User {
  Age: string;
  Gender: string;
  Height: string;
  Weight: string;
}

export interface MacroValues {
  Calories: number;
  Protein: number;
  Carbohydrates: number;
  Fat: number;
}

export interface Meals {
  Breakfast: string;
  Snack1: string;
  Lunch: string;
  Snack2: string;
  Dinner: string;
  Snack3: string;
}

export interface Recipe {
  Ingredients: string;
  Instructions: string;
}

export interface MealRecipe {
  Meal: string;
  Recipe: Recipe;
}

export interface Assistant {
  MacroValues: MacroValues;
  Meals: Meals;
  MealRecipes: MealRecipe[];
  ShoppingList: string;
}

export interface GeneratedData {
  USER: User;
  ASSISTANT: Assistant;
}

export interface FormData {
  Age: string;
  Gender: string;
  Height: string;
  Weight: string;
}

export interface Result {
  content: string;
  assistant: GeneratedData;
}
