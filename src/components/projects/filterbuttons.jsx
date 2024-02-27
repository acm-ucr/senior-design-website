import { useState, useEffect } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

function MakeList({ list, checkedcolor, handleSelection, selectedItems }) {
  return (
    <div className="border-2 rounded-md border-gray-500 mt-1">
      {list.map(function (data) {
        return (
          <div className="flex flex-row gap-2 m-2" key={data}>
            <input
              type="checkbox"
              className={`relative peer appearance-none w-4 h-4 bg-gray-300 rounded-sm mt-1 ${checkedcolor}`}
              onChange={() => handleSelection(data)}
              checked={selectedItems.includes(data)}
            />

            {data}
            <svg
              className="
                    absolute 
                    w-4 h-4 mt-1
                    hidden peer-checked:block pointer-events-none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </div>
        );
      })}
    </div>
  );
}

const Filterbuttons = ({ selectedYears, onYearSelect }) => {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [isYearSelected, setIsYearSelected] = useState(false);

  useEffect(() => {
    setIsYearSelected(selectedYears.length > 0);
  }, [selectedYears]);

  const handleYearSelection = (year) => {
    const updatedYears = selectedYears.includes(year)
      ? selectedYears.filter((item) => item !== year)
      : [...selectedYears, year];
    onYearSelect(updatedYears);
  };

  const handleOpen = () => {
    if (open1 === true && open === false) {
      setOpen1(false);
    }
    setOpen(!open);
  };

  return (
    <div className="flex flex-row gap-1 pl-[16.66%]">
      <div>
        {open && !open1 ? (
          <button
            onClick={handleOpen}
            className={`border-2 border-buttons-blue
            rounded-md px-2`}
          >
            <div className="flex flex-row p-0.5">
              <div
                className={`text-buttons-blue
                mr-4`}
              >
                {"year"}
              </div>
              <IoIosArrowUp className={`mt-1 text-buttons-blue`} />
            </div>
          </button>
        ) : (
          <button
            onClick={handleOpen}
            className={`rounded-md px-2 py-1 ${
              isYearSelected
                ? "border-buttons-blue bg-white border-2"
                : "border-gray-500 bg-gray-200"
            }`}
          >
            <div className="flex flex-row">
              <div
                className={`${
                  isYearSelected ? "text-buttons-blue" : "text-gray-500"
                } mr-4`}
              >
                {"year"}
              </div>
              <IoIosArrowDown
                className={`mt-1 ${
                  isYearSelected ? "text-buttons-blue" : "text-gray-500"
                }`}
              />
            </div>
          </button>
        )}

        {open && !open1 ? (
          <MakeList
            list={["2022-23", "2023-24", "2024-25"]}
            checkedcolor={"checked:bg-sky-300"}
            handleSelection={handleYearSelection}
            selectedItems={selectedYears}
          />
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default Filterbuttons;
