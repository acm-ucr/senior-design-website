"use client";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";

const Search = ({ selectedYears = [], selectedTypes = [] }) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputValue);
  };

  return (
    <div className="flex justify-center">
      <div className="relative">
        <form onSubmit={handleSubmit}>
          <div className="flex items-center relative">
            <CiSearch className="absolute left-0 top-1 mt-2 ml-2" />
            <input
              type="text"
              placeholder="Project Name"
              className="rounded-lg pr-36 md:pr-96 pl-10 py-2 border border-black"
              value={inputValue}
              onChange={handleChange}
            />
          </div>
        </form>

        <div className="flex flex-wrap mt-2">
          {selectedYears.length > 0 &&
            selectedYears.map((year) => (
              <span
                key={year}
                className="bg-gray-200 rounded-full px-2 py-1 mr-2 mb-2"
              >
                {year}
              </span>
            ))}
          {selectedTypes.length > 0 &&
            selectedTypes.map((type) => (
              <span
                key={type}
                className="bg-gray-200 rounded-full px-2 py-1 mr-2 mb-2"
              >
                {type}
              </span>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
