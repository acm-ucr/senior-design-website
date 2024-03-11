import { CiSearch } from "react-icons/ci";

const Search = ({ selectedYears = [], onRemoveYear }) => {
  return (
    <div className="flex justify-center mb-15">
      <div className="flex flex-wrap border-1 border-black rounded-xl gap-x-2 items-center mt-10 mb-2 w-2/3 p-2">
        <CiSearch className="mr-2" />
        {selectedYears.map((year) => (
          <div
            key={year}
            className="bg-white border-1 border-buttons-blue rounded-md text-buttons-blue px-2 py-1 mr-2  flex items-center"
          >
            {year}
            <button
              type="button"
              className="ml-2 text-xl text-buttons-blue"
              onClick={() => onRemoveYear(year)}
            >
              &times;
            </button>
          </div>
        ))}
        <input
          type="text"
          className="flex-grow-1 focus:outline-none"
          placeholder="Project Type"
        />
      </div>
    </div>
  );
};

export default Search;
