"use client";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Rss } from "lucide-react";

type SelectFilterProps = {
  onLocationFilterChange: (location: string) => void;
};

const SelectFilter = ({ onLocationFilterChange }: SelectFilterProps) => {
  const handleLocationChange = (value: string) => {
    onLocationFilterChange(value);
  };

  return (
    <div className="border rounded border-slate-500 py-2 pr-3 pl-10 relative">
      <Rss className="text-slate-800 size-4 absolute left-4 top-5" />
      <Select onValueChange={handleLocationChange}>
        <SelectTrigger className="border-none focus:ring-offset-0 focus:ring-0 rounded-none w-full lg:w-52">
          <SelectValue placeholder="On-site & Remote" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="on-site">On-site</SelectItem>
            <SelectItem value="remote">Remote</SelectItem>
            <SelectItem value="on-site-remote" defaultValue="on-site-remote">
              On-site & Remote
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};
export default SelectFilter;
