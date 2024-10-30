import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import { ImageOff, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Job {
  _id: string;
  role: string;
  jobType: string;
  location: string;
  hybrid: boolean;
  jobFunction: string;
  jobDescription: string;
  project: string;
  category: string;
  image: string;
}

interface JobProps {
  job: Job;
}

const excludedValues = ["N/A", "nil", "null"];

const Card = ({ job }: JobProps) => {
  const jobDescriptionLink =
    job.jobDescription && job.jobDescription.startsWith("http") ? job.jobDescription : "#";

  return (
    <Link
      className="bg-[#22244D] text-white rounded p-4 flex transition-colors items-center border-[#46476a] border hover:bg-[#22244D]/50"
      href={jobDescriptionLink}>
      <div className="flex gap-4 items-center w-full">
        <div className="w-[72px] h-[72px] relative flex items-center justify-center">
          {job.image ? (
            <Image
              src={job.image}
              width={72}
              height={72}
              alt="Company logo"
              style={{ objectFit: "cover", width: "100%", height: "auto" }}
            />
          ) : (
            <ImageOff size={50} />
          )}
        </div>
        <div className="flex flex-1 flex-col md:flex-row justify-between gap-1">
          <div className="flex flex-col gap-1 items-start">
            <h2 className="font-semibold text-sm sm:text-lg md:text-xl">{job.role}</h2>
            <p className="font-medium text-sm md:text-base">{job.project}</p>
            <div className="flex gap-2 items-center">
              {job.jobType && !excludedValues.includes(job.jobType) && (
                <p className="text-sm text-[#70718c] font-medium">{job.jobType}</p>
              )}
            </div>
          </div>
          {job.location && !excludedValues.includes(job.location) && (
            <div>
              <p className="text-sm flex font-medium items-center gap-1">
                <MapPin className="text-[#70718c] size-4" />
                {job.location}
              </p>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};

export default Card;

Card.Skeleton = function CardSkeleton() {
  return (
    <div className="relative">
      <Skeleton className="rounded w-full h-[6.5831rem] p-[.125rem]">
        <div className="size-full bg-[#1f2146] z-50 flex gap-4 items-center p-4">
          <Skeleton className="w-[72px] h-[72px] rounded" />
          <div className="flex flex-1 flex-col md:flex-row justify-between gap-1">
            <div className="flex flex-col gap-1 items-start w-full">
              <Skeleton className="w-full h-[1.125rem] md:h-5" />
              <Skeleton className="w-1/2 h-[1.125rem]" />
              <div className="flex gap-2 items-center w-full">
                <Skeleton className="w-[20%] h-[1.125rem]" />
                <Skeleton className="w-[20%] h-[1.125rem]" />
              </div>
            </div>
            <div className="w-full flex md:justify-end">
              <Skeleton className="w-[40%] md:w-[30%] h-[1.125rem]" />
            </div>
          </div>
        </div>
      </Skeleton>
    </div>
  );
};
