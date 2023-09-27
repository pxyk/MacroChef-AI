import React from "react";

interface ShoppingListTableProps {
  shoppingList: string;
}

const ShoppingListTable: React.FC<ShoppingListTableProps> = ({
  shoppingList,
}) => {
  // Check if shoppingList is defined and not empty
  if (!shoppingList || shoppingList.trim() === "") {
    return (
      <div className="my-6 pt-12 flex flex-col items-center">
        <h2 className="text-2xl font-extrabold mb-4 text-indigo-600 pb-2">
          S H O P P I N G &nbsp; L I S T
        </h2>
        <p>No items in the shopping list.</p>
      </div>
    );
  }

  // Split the shopping list string by commas outside parentheses
  const shoppingItems = shoppingList
    .split(/,(?![^\(]*\))/)
    .map((item, index) => (
      <div key={index} className="p-4 lg:w-1/3 md:w-1/2 w-full">
        <div className="h-full border border-gray-700 rounded-lg shadow-lg p-6 hover:bg-gray-800 hover:border-indigo-500 transition duration-300 flex justify-center items-center">
          <h2 className="text-gray-300 text-lg font-bold mb-2">
            {item.trim()}
          </h2>
        </div>
      </div>
    ));

  return (
    <div className="my-6 pt-12">
      <h2 className="text-2xl font-extrabold mb-4 text-indigo-600 pb-2">
        S H O P P I N G &nbsp; L I S T
      </h2>
      <div className="flex flex-wrap -m-2 justify-center">{shoppingItems}</div>
    </div>
  );
};

export default ShoppingListTable;
