"use client";
import { useState } from "react";

import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

function Support({ list, checkedcolor }) {
  return (
    <div className="border-2 rounded-md border-gray-500 mt-1">
      {list.map(function (data) {
        return (
          <div className="flex flex-row gap-2 m-2" key={0}>
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
            className="border-2 border-blue-500 rounded-lg p-0.5"
          >
            <div className="flex flex-row p-0.5">
              <p className="text-blue-400 mr-5 ml-1"> {"year"} </p>
              <IoIosArrowUp className="mt-1" />
            </div>
          </button>
        ) : (
          <button onClick={handleOpen} className="bg-gray-200 rounded-md p-0.5">
            <div className="flex flex-row p-0.5">
              <p className="text-gray-500 mr-5 ml-1"> {"year"} </p>
              <IoIosArrowDown className="mt-1" />
            </div>
          </button>
        )}

        {open && !open1 ? (
          <Support
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
            className="border-2 border-orange-300 rounded-lg p-0.5"
          >
            <div className="flex flex-row p-0.5">
              <p className="text-orange-300 mr-5 ml-1"> {"type"} </p>
              <IoIosArrowUp className="mt-1" />
            </div>
          </button>
        ) : (
          <button
            onClick={handleOpen1}
            className="bg-gray-200 rounded-md p-0.5"
          >
            <div className="flex flex-row p-0.5">
              <p className="text-gray-500 mr-5 ml-1"> {"type"} </p>
              <IoIosArrowDown className="mt-1" />
            </div>
          </button>
        )}

        {open1 && !open ? (
          <Support
            list={["Operating Systems", "Compiler", "Database"]}
            checkedcolor={"checked:bg-orange-300"}
          />
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default Filterbuttons;
