import React from "react";
import { MacroValues } from "../types/index";

interface MacroValuesTableProps {
  macroValues: MacroValues;
}

const MacroValuesTable: React.FC<MacroValuesTableProps> = ({ macroValues }) => {
  const macros = ["Calories", "Protein", "Carbohydrates", "Fat"];

  return (
    <div className="overflow-x-auto shadow-lg rounded-lg">
      <table className="w-full min-w-[300px] text-sm text-left text-gray-300">
        <thead className="text-xs text-gray-300 uppercase bg-indigo-800">
          <tr>
            <th className="px-6 py-3">Macro</th>
            <th className="px-6 py-3">Value</th>
          </tr>
        </thead>
        <tbody>
          {macros.map((macro, index) => (
            <tr
              key={index}
              className="hover:bg-gray-100 dark:hover:bg-indigo-800"
            >
              <td className="px-6 py-4 font-extrabold text-gray-900 whitespace-nowrap dark:text-gray-300">
                {macro}
              </td>
              <td className="px-6 py-4">
                {macroValues && macroValues[macro as keyof MacroValues]
                  ? macroValues[macro as keyof MacroValues]
                  : ""}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MacroValuesTable;
