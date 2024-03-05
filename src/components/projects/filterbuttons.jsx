"use client";
import { useState } from "react";

import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

function MakeList({ list, checkedcolor }) {
  return (
    <div className="absolute border rounded-md border-gray-500 mt-2">
      {list.map(function (data) {
        return (
          <div className="flex flex-row gap-2 m-2 px-3" key={0}>
            <input
              type="checkbox"
              className={`relative peer appearance-none w-4 h-4 bg-gray-300 rounded-sm  mt-1 ${checkedcolor}`}
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
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </div>
        );
      })}
    </div>
  );
}

const Filterbuttons = () => {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);

  const handleOpen = () => {
    if (open1 == true && open == false) {
      setOpen1(false);
    }
    setOpen(!open);
  };

  const handleOpen1 = () => {
    if (open == true && open1 == false) {
      setOpen(false);
    }
    setOpen1(!open1);
  };

  return (
    <div className="flex flex-row gap-1">
      <div>
        {open && !open1 ? (
          <button
            onClick={handleOpen}
            className="border-2 border-buttons-blue rounded-md px-2 h-8"
          >
            <div className="flex flex-row p-0.5">
              <div className="text-buttons-blue mr-4"> {"year"} </div>
              <IoIosArrowUp className="mt-1" />
            </div>
          </button>
        ) : (
          <button
            onClick={handleOpen}
            className="bg-gray-200 rounded-md px-2 py-1 h-8"
          >
            <div className="flex flex-row">
              <div className="text-gray-500 mr-4"> {"year"} </div>
              <IoIosArrowDown className="mt-1" />
            </div>
          </button>
        )}

        {open && !open1 ? (
          <MakeList
            list={["2022-23", "2023-24", "2024-25"]}
            checkedcolor={"checked:bg-sky-300"}
          />
        ) : (
          <div></div>
        )}
      </div>

      <div>
        {open1 && !open ? (
          <button
            onClick={handleOpen1}
            className="border-2 border-buttons-orange rounded-md px-2"
          >
            <div className="flex flex-row p-0.5">
              <div className="text-buttons-orange mr-4"> {"type"} </div>
              <IoIosArrowUp className="mt-1" />
            </div>
          </button>
        ) : (
          <button
            onClick={handleOpen1}
            className="bg-gray-200 rounded-md px-2 py-1 absolute"
          >
            <div className="flex flex-row">
              <div className="text-gray-500 mr-4"> {"type"} </div>
              <IoIosArrowDown className="mt-1" />
            </div>
          </button>
        )}

        {open1 && !open ? (
          <MakeList
            list={["Operating Systems", "Compiler", "Database"]}
            checkedcolor={"checked:bg-buttons-orange"}
          />
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default Filterbuttons;
