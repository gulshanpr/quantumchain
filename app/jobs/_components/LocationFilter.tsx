import { Input } from "@/components/ui/input";
import { MapPin } from "lucide-react";

const LocationFilter = ({
  onLocationFilterChange,
}: {
  onLocationFilterChange: (location: string) => void;
}) => {
  const handleLocationChange = (e: any) => {
    const location = e.target.value;
    onLocationFilterChange(location);
  };
  return (
    <div className="py-2 pr-3 pl-10 relative lg:flex-1">
      <MapPin className="text-[#70718c] size-[1.375rem] absolute left-4 top-4" />
      <Input
        type="text"
        placeholder="Location"
        className="border-none rounded-none placeholder:text-[.8438rem] text-white bg-[#22244D] sm:placeholder:text-base caret-background focus-visible:ring-offset-0 focus-visible:ring-0"
        onChange={handleLocationChange}
      />
    </div>
  );
};
export default LocationFilter;
