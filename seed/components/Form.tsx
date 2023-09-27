import React, { ChangeEvent, FormEvent } from "react";
import { FormData } from "../types/index";

interface FormProps {
  query: FormData;
  loading: boolean;
  handleInputChange: (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  submitHandle: (e: FormEvent<HTMLFormElement>) => void;
}

const Form: React.FC<FormProps> = ({
  query,
  loading,
  handleInputChange,
  submitHandle,
}) => {
  return (
    <form onSubmit={submitHandle} className="flex mt-24 flex-col gap-8">
      <div className="flex gap-8">
        <div className="relative flex-1">
          <label htmlFor="age" className="leading-7 text-sm text-gray-400">
            Age
          </label>
          <input
            type="number"
            id="age"
            name="Age"
            placeholder="Age"
            value={query.Age}
            onChange={handleInputChange}
            className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div className="relative flex-1">
          <label htmlFor="gender" className="leading-7 text-sm text-gray-400">
            Gender
          </label>
          <select
            id="gender"
            name="Gender"
            value={query.Gender}
            onChange={handleInputChange}
            className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-2.5 px-3 leading-8 transition-colors duration-200 ease-in-out"
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
      </div>
      <div className="flex gap-8">
        <div className="relative flex-1">
          <label htmlFor="height" className="leading-7 text-sm text-gray-400">
            Height
          </label>
          <input
            type="number"
            id="height"
            name="Height"
            placeholder="Height"
            value={query.Height}
            onChange={handleInputChange}
            className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div className="relative flex-1">
          <label htmlFor="weight" className="leading-7 text-sm text-gray-400">
            Weight
          </label>
          <input
            type="number"
            id="weight"
            name="Weight"
            placeholder="Weight"
            value={query.Weight}
            onChange={handleInputChange}
            className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
      </div>
      <button
        disabled={
          !query.Age ||
          !query.Gender ||
          !query.Height ||
          !query.Weight ||
          loading
        }
        className="h-10 px-10 rounded-lg bg-blue-600 text-gray-300 text-sm font-medium disabled:opacity-50 mt-8 hover:bg-blue-500 disabled:pointer-events-none mx-auto"
      >
        {loading ? "..." : "GENERATE"}
      </button>
    </form>
  );
};

export default Form;
