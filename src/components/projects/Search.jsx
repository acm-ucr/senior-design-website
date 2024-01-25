"use client";

import { useState } from "react";
import { CiSearch } from "react-icons/ci";

const Search = () => {
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
      <div className="relative w-3/4">
        <form onSubmit={handleSubmit}>
          <label>
            <CiSearch className="absolute left-3 top-1" />
            <input
              type="text"
              placeholder="Project Name"
              className="rounded-lg w-full px-10 border border-black"
              value={inputValue}
              onChange={handleChange}
            />
          </label>
        </form>
      </div>
    </div>
  );
};
export default Search;
