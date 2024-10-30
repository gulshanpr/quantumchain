"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

type TextFilterProps = {
  onTextFilterChange: (filter: string) => void;
};

const TextFilter = ({ onTextFilterChange }: TextFilterProps) => {
  const [value, setValue] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    onTextFilterChange(e.target.value);
  };

  return (
    <div className="rounded py-2 pr-3 pl-10 relative lg:flex-1">
      <Search className="text-[#70718c] size-[22px] absolute left-4 top-4" />
      <Input
        type="text"
        value={value}
        onChange={handleInputChange}
        placeholder="Search job title or keyword"
        className="border-none rounded-none text-white placeholder:text-[.8438rem] bg-[#22244D] sm:placeholder:text-base caret-background focus-visible:ring-offset-0 focus-visible:ring-0"
      />
    </div>
  );
};
export default TextFilter;
