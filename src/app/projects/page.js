"use client";
import React, { useState } from "react";
import Filterbuttons from "../../components/projects/filterbuttons";
import Search from "@/components/projects/Search";
const Page = () => {
  const [selectedYears, setSelectedYears] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState([]);

  return (
    <>
      <div>Projects</div>
      <Search selectedYears={selectedYears} selectedTypes={selectedTypes} />
      <Filterbuttons
        selectedYears={selectedYears}
        selectedTypes={selectedTypes}
        onYearSelect={setSelectedYears}
        onTypeSelect={setSelectedTypes}
      />
    </>
  );
};

export default Page;
