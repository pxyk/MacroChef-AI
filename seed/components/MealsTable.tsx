import React, { useState } from "react";
import { FaChevronRight, FaChevronDown } from "react-icons/fa";

interface MealDescriptions {
  [key: string]: string;
}

interface MealRecipe {
  Meal: string;
  Recipe: {
    Ingredients: string;
    Instructions: string;
  };
}

interface MealsTableProps {
  mealRecipes: MealRecipe[];
  mealDescriptions: MealDescriptions;
}

const MealsTable: React.FC<MealsTableProps> = ({
  mealRecipes,
  mealDescriptions,
}) => {
  const mealOrder = [
    "Breakfast",
    "Snack1",
    "Lunch",
    "Snack2",
    "Dinner",
    "Snack3",
  ];

  const [expandedMeals, setExpandedMeals] = useState<string[]>([]);

  const handleMealClick = (meal: string) => {
    setExpandedMeals((prevExpandedMeals) =>
      prevExpandedMeals.includes(meal)
        ? prevExpandedMeals.filter((m) => m !== meal)
        : [...prevExpandedMeals, meal]
    );
  };

  return (
    <div className="my-6 pt-12">
      <h2 className="text-2xl font-extrabold mb-4 text-indigo-600 pb-2">
        M E A L S
      </h2>
      <div className="overflow-x-auto shadow-lg rounded-lg">
        <table className="w-full min-w-[300px] text-sm text-left text-gray-300">
          <colgroup>
            <col style={{ width: "10%" }} /> <col style={{ width: "30%" }} />
            <col style={{ width: "60%" }} />
          </colgroup>
          <thead className="text-xs text-gray-300 uppercase bg-indigo-800">
            <tr>
              <th className="px-6 py-3"></th>
              <th className="px-6 py-3">Meal</th>
              <th className="px-6 py-3">Description</th>
            </tr>
          </thead>
          <tbody>
            {mealOrder.map((meal, index) => {
              const mealRecipe = mealRecipes?.find(
                (recipe) => recipe.Meal === meal
              );
              const ingredients = mealRecipe?.Recipe?.Ingredients || "";
              const instructions = mealRecipe?.Recipe?.Instructions || "";

              const isExpanded = expandedMeals.includes(meal);

              return (
                <React.Fragment key={index}>
                  <tr
                    className="cursor-pointer transition-all duration-300 hover:bg-indigo-800"
                    onClick={() => handleMealClick(meal)}
                  >
                    <td className="px-6">
                      {isExpanded ? (
                        <FaChevronDown size={12} />
                      ) : (
                        <FaChevronRight size={12} />
                      )}
                    </td>
                    <td className="px-6 py-4">{meal}</td>
                    <td className="px-6 py-4">
                      {mealDescriptions && mealDescriptions[meal]}
                    </td>
                  </tr>
                  {isExpanded && (
                    <>
                      <tr>
                        <td colSpan={3} className="pl-12">
                          <div className="max-h-48 overflow-y-auto">
                            <strong className="block mb-2 text-gray-400 text-lg">
                              Ingredients:
                            </strong>
                            <ul className="list-disc ml-6 text-gray-400">
                              {ingredients.split(";").map((ingredient, i) => (
                                <li key={i} className="mb-1">
                                  {ingredient}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td colSpan={3} className="pl-12">
                          <div className="max-h-48 overflow-y-auto">
                            <strong className="block mb-2 text-gray-400 text-lg">
                              Instructions:
                            </strong>
                            <ul className="ml-6 list-disc text-gray-400">
                              {instructions.split(";").map((step, i) => (
                                <li key={i} className="mb-1">
                                  {step}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </td>
                      </tr>
                    </>
                  )}
                </React.Fragment>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MealsTable;
