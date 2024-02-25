"use client";
import React, { useState } from "react";
import Filterbuttons from "../../components/projects/filterbuttons";
import Search from "@/components/projects/Search";
const Page = () => {
  const [selectedYears, setSelectedYears] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const handleRemoveYear = (year) => {
    setSelectedYears(selectedYears.filter((item) => item !== year));
  };

  const handleRemoveType = (type) => {
    setSelectedTypes(selectedTypes.filter((item) => item !== type));
  };
  return (
    <>
      <div>Projects</div>
      <Search
        selectedYears={selectedYears}
        selectedTypes={selectedTypes}
        onRemoveYear={handleRemoveYear}
        onRemoveType={handleRemoveType}
      />
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
