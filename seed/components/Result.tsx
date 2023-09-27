import { Result } from "../types/index";
import MealsTable from "./MealsTable";
import MacroValuesTable from "./MacroValuesTable";
import ShoppingListTable from "./ShoppingListTable";

interface ResultProps {
  result: Result | null;
}

const Results: React.FC<ResultProps> = ({ result }) => {
  const data = result ? JSON.parse(result.content) : null;
  const mealRecipes = data?.ASSISTANT?.MealRecipes;
  const macroValues = data?.ASSISTANT?.MacroValues;
  const mealDescriptions = data?.ASSISTANT?.Meals;
  const shoppingList = data?.ASSISTANT?.ShoppingList;

  return (
    <div className="my-4 mx-auto max-w-2xl">
      {" "}
      {/* Parent container style */}
      <div className="mt-10">
        <h2 className="text-2xl font-extrabold mb-4 text-indigo-600 pb-2 pt-12">
          M A C R O
        </h2>
        <MacroValuesTable macroValues={macroValues} />
      </div>
      <div className="mt-10">
        <MealsTable
          mealRecipes={mealRecipes}
          mealDescriptions={mealDescriptions}
        />
      </div>
      <div className="mt-10">
        <ShoppingListTable shoppingList={shoppingList} />
      </div>
    </div>
  );
};

export default Results;
