import React from "react";
import { Badge } from "@/components/ui/badge";
import { XCircle, XIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SelectedOptionsDisplayProps {
  selectedJobFunction: string[];
  setSelectedJobFunction: React.Dispatch<React.SetStateAction<string[]>>;
  selectedJobType: string[];
  setSelectedJobType: React.Dispatch<React.SetStateAction<string[]>>;
  jobFunctionOptions: { value: string; label: string }[];
  jobTypeOptions: { value: string; label: string }[];
}

const SelectedOptionsDisplay: React.FC<SelectedOptionsDisplayProps> = ({
  selectedJobFunction,
  setSelectedJobFunction,
  selectedJobType,
  setSelectedJobType,
  jobFunctionOptions,
  jobTypeOptions,
}) => {
  const getOptionLabel = (value: string, options: { value: string; label: string }[]) => {
    const option = options.find((o) => o.value === value);
    return option ? option.label : value;
  };

  const handleClearAll = () => {
    setSelectedJobFunction([]);
    setSelectedJobType([]);
  };

  const handleRemoveJobFunction = (value: string) => {
    setSelectedJobFunction((prev) => prev.filter((item) => item !== value));
  };

  const handleRemoveJobType = (value: string) => {
    setSelectedJobType((prev) => prev.filter((item) => item !== value));
  };

  return (
    <div className="flex flex-wrap gap-1.5">
      {selectedJobFunction.map((value) => (
        <Badge
          key={value}
          className="bg-transparent text-foreground border-foreground/1 hover:bg-transparent text-sm my-1 text-white">
          {getOptionLabel(value, jobFunctionOptions)}
          <XCircle
            className="ml-2 h-4 w-4 cursor-pointer text-white"
            onClick={() => handleRemoveJobFunction(value)}
          />
        </Badge>
      ))}
      {selectedJobType.map((value) => (
        <Badge
          key={value}
          className="bg-transparent text-foreground border-foreground/1 hover:bg-transparent text-sm my-1">
          {getOptionLabel(value, jobTypeOptions)}
          <XCircle
            className="ml-2 h-4 w-4 cursor-pointer"
            onClick={() => handleRemoveJobType(value)}
          />
        </Badge>
      ))}
      {(selectedJobFunction.length > 0 || selectedJobType.length > 0) && (
        <Button
          onClick={handleClearAll}
          className="group flex items-center justify-between bg-transparent text-[#70718c] h-auto py-1 hover:bg-transparent hover:text-white transition-colors">
          Clear all{" "}
          <XIcon className="h-4 cursor-pointer text-[#70718c] group-hover:text-white transition-colors" />
        </Button>
      )}
    </div>
  );
};

export default SelectedOptionsDisplay;
