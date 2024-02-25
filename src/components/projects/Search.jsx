import { CiSearch } from "react-icons/ci";

const Search = ({
  selectedYears = [],
  selectedTypes = [],
  onRemoveYear,
  onRemoveType,
}) => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-wrap border-1 border-black rounded-xl gap-x-2 items-center my-2 w-2/3 p-2">
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
        {selectedTypes.map((type) => (
          <div
            key={type}
            className="bg-white border-1 tag-item border-buttons-orange text-buttons-orange rounded-md px-2 py-1 mr-2 flex items-center"
          >
            {type}
            <button
              type="button"
              className="ml-2 text-xl text-buttons-orange"
              onClick={() => onRemoveType(type)}
            >
              &times;
            </button>
          </div>
        ))}
        <input type="text" className="flex-grow-1" placeholder="Project Type" />
      </div>
    </div>
  );
};

export default Search;
