import { MultiSelect } from "@/components/MultiSelector";
import SelectedOptionsDisplay from "./SelectedOptionsDisplay";

const jobFunctionOptions = [
  { value: "software_engineering", label: "Software Engineering" },
  { value: "marketing_communication", label: "Marketing Communication" },
  { value: "sales_business_dev", label: "Sales Business Dev" },
  { value: "data_science", label: "Data Science" },
  { value: "research_development", label: "Research Development" },
  { value: "product_management", label: "Product Management" },
  { value: "design_ux", label: "Design UX" },
  { value: "content", label: "Content" },
  { value: "other_engineering", label: "Other Engineering" },
  { value: "devops_infrastructure", label: "DevOps Infrastructure" },
  { value: "accounting_finance", label: "Accounting Finance" },
];

const jobTypeOptions = [
  { value: "hybrid", label: "On-Site" },
  { value: "Remote", label: "Remote" },
];

interface MultiSelectFilterProps {
  selectedJobFunction: string[];
  setSelectedJobFunction: React.Dispatch<React.SetStateAction<string[]>>;
  selectedJobType: string[];
  setSelectedJobType: React.Dispatch<React.SetStateAction<string[]>>;
}

const MultiSelectFilter = ({
  selectedJobFunction,
  setSelectedJobFunction,
  selectedJobType,
  setSelectedJobType,
}: MultiSelectFilterProps) => {
  return (
    <>
      <div className="w-full md:w-1/2 flex flex-col md:flex-row gap-3 relative items-center">
        <MultiSelect
          options={jobFunctionOptions}
          onValueChange={setSelectedJobFunction}
          defaultValue={selectedJobFunction}
          className="w-full border-[#46476a] bg-[#1f2146] hover:bg-[#1f2146] font-semibold"
          placeholder="Job Function"
        />
        <MultiSelect
          options={jobTypeOptions}
          onValueChange={setSelectedJobType}
          defaultValue={selectedJobType}
          className="w-full border-[#46476a] bg-[#1f2146] hover:bg-[#1f2146] font-semibold"
          placeholder="Job Type"
        />
      </div>
      <div className="flex flex-col md:flex-row items-center w-full">
        <SelectedOptionsDisplay
          selectedJobFunction={selectedJobFunction}
          setSelectedJobFunction={setSelectedJobFunction}
          selectedJobType={selectedJobType}
          setSelectedJobType={setSelectedJobType}
          jobFunctionOptions={jobFunctionOptions}
          jobTypeOptions={jobTypeOptions}
        />
      </div>
    </>
  );
};

export default MultiSelectFilter;
