"use client";
import { useState } from "react";
import { MultiSelect } from "@/components/MultiSelector";
// import Category from "./Category";

const jobType = [
  { value: "fulltime", label: "Full Time" },
  { value: "contract", label: "Contract" },
  { value: "hybrid", label: "Hybrid" },
  { value: "remote", label: "Remote" },
];
const JobTypeSelector = () => {
  const [selectedJobType, setSelectedJobType] = useState<string[]>([]);
  return (
    <div className="flex">
      <div>
        <MultiSelect
          options={jobType}
          onValueChange={setSelectedJobType}
          defaultValue={selectedJobType}
          className="w-[150px]"
          placeholder="Job Function"
        />
      </div>
      <div className="ml-[30px]">
        <MultiSelect
          options={jobType}
          onValueChange={setSelectedJobType}
          defaultValue={selectedJobType}
          className="w-[6.8rem]"
          placeholder="Job Type"
        />
      </div>
      <div className="ml-[207px]">
        {/* <Category /> */}
      </div>
    </div>
  );
};
export default JobTypeSelector;
