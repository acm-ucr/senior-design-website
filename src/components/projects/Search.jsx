import { CiSearch } from "react-icons/ci";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

const Search = ({ selectedYears = [], onRemoveYear, setSearchBarText }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  function handleSearch(term) {
    setSearchBarText(term);
    const params = new URLSearchParams(searchParams); // makes a copy of existing SearchParams.
    if (term) {
      params.set("query", term); // the existing search params' "query" property is set to the current term, overwriting any previous existing terms.
    } else {
      params.delete("query"); // if no term, remove the search params' "query" property.
    }

    replace(`${pathname}?${params.toString()}`); // using router, currentpath = originalpath+"?" + params in string form. Just string concatation here.
    // console.log(pathname);
  }

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
          onChange={(e) => {
            handleSearch(e.target.value);
          }}
          defaultValue={searchParams.get("query")?.toString()}
        />
      </div>
    </div>
  );
};

export default Search;
