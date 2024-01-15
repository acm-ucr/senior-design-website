"use client"; // This is a client component

import { useState } from "react";

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
      <form className="w-3/4" onSubmit={handleSubmit}>
        <label>
          <input
            type="search"
            placeholder="Project Name"
            className="rounded-lg w-full px-4"
            value={inputValue}
            onChange={handleChange}
          />
        </label>
      </form>
    </div>
  );
};
export default Search;
