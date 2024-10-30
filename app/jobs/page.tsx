"use client";
import { useEffect, useRef, useState } from "react";
import Card from "./_components/Card";
import TextFilter from "./_components/TextFilter";
import LocationFilter from "./_components/LocationFilter";
import MultiSelectFilter from "./_components/MultiSelectFilter";
import { Skeleton } from "@/components/ui/skeleton";

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

const JobsPage = () => {
  const [selectedJobFunction, setSelectedJobFunction] = useState<string[]>([]);
  const [selectedJobType, setSelectedJobType] = useState<string[]>([]);
  const [filteredjobs, setFilteredJobs] = useState<Job[]>([]);
  const [allJobs, setAllJobs] = useState<Job[]>([]);
  const [activeCategories, setActiveCategories] = useState<string[]>([]);
  const [searchLocation, setSearchLocation] = useState<string>("");
  const [searchTitle, setSearchTitle] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  const handleFilterChange = (data: string) => {
    setSearchTitle(data);
  };

  const handleLocationChange = (data: string) => {
    setSearchLocation(data);
  };

  useEffect(() => {
    const fetchAllJobs = async () => {
      let allJobs: Job[] = [];

      try {
        const response = await fetch("/api/jobs");
        if (response.ok) {
          const data = await response.json();

          allJobs = data.jobs;
        }
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }

      setAllJobs(allJobs);
      setFilteredJobs(allJobs);
      setLoading(false);
    };

    fetchAllJobs();
  }, []);

  useEffect(() => {
    const applyFilters = () => {
      handleFilters(
        allJobs,
        selectedJobFunction,
        selectedJobType,
        activeCategories,
        searchLocation,
        searchTitle
      );
    };

    if (allJobs.length > 0) {
      applyFilters();
    }
  }, [
    allJobs,
    selectedJobFunction,
    selectedJobType,
    activeCategories,
    searchLocation,
    searchTitle,
  ]);

  const handleFilters = (
    jobs: Job[],
    selectedJobFunctions: string[],
    selectedJobTypes: string[],
    categories: string[],
    location: string,
    title: string
  ) => {
    if (
      selectedJobFunctions.length === 0 &&
      selectedJobTypes.length === 0 &&
      categories.length === 0 &&
      !location &&
      !title
    ) {
      setFilteredJobs(jobs);
      return;
    }

    const filtered = jobs.filter((job) => {
      const matchesCategory = categories.length > 0 ? categories.includes(job.category) : true;
      const matchesJobFunction =
        selectedJobFunctions.length > 0 ? selectedJobFunctions.includes(job.jobFunction) : true;
      const matchesJobType =
        selectedJobTypes.length > 0
          ? selectedJobTypes.some((type) => {
              if (type === "Remote") {
                return job.jobType === "Remote" && job.hybrid === false;
              } else {
                return job.hybrid === true;
              }
            })
          : true;

      const matchesLocation = location
        ? job.location.toLowerCase().includes(location.toLowerCase())
        : true;
      const matchesTitle = searchTitle
        ? job.role.toLowerCase().includes(title.toLowerCase())
        : true;

      return (
        matchesCategory && matchesJobFunction && matchesJobType && matchesLocation && matchesTitle
      );
    });

    setFilteredJobs(filtered);
  };

  const handleCategory = (cate: string) => {
    setActiveCategories((prevCategories) =>
      prevCategories.includes(cate)
        ? prevCategories.filter((cat) => cat !== cate)
        : [...prevCategories, cate]
    );
  };

  useEffect(() => {
    handleFilters(
      allJobs,
      selectedJobFunction,
      selectedJobType,
      activeCategories,
      searchLocation,
      searchTitle
    );
  }, [selectedJobFunction, selectedJobType, activeCategories, searchLocation, searchTitle]);

  const fakeData = [
    {
      _id: "1",
      role: "Frontend Developer",
      jobType: "Full-time",
      location: "New York, NY",
      hybrid: true,
      jobFunction: "Development",
      jobDescription: "",
      project: "Smart Web Solutions",
      category: "Operator",
      image: "",
    },
    {
      _id: "2",
      role: "Backend Engineer",
      jobType: "Part-time",
      location: "San Francisco, CA",
      hybrid: false,
      jobFunction: "Engineering",
      jobDescription: "",
      project: "Data Insights Corp",
      category: "AVS",
      image: "",
    },
    {
      _id: "3",
      role: "Data Scientist",
      jobType: "Contract",
      location: "Remote",
      hybrid: false,
      jobFunction: "Research",
      jobDescription: "",
      project: "AI Innovations",
      category: "EigenDA",
      image: "",
    },
    {
      _id: "4",
      role: "Product Manager",
      jobType: "Full-time",
      location: "Los Angeles, CA",
      hybrid: true,
      jobFunction: "Management",
      jobDescription: "",
      project: "Creative Labs",
      category: "AVS",
      image: "",
    },
    {
      _id: "5",
      role: "UI/UX Designer",
      jobType: "Internship",
      location: "Austin, TX",
      hybrid: false,
      jobFunction: "Design",
      jobDescription: "",
      project: "Design Studio",
      category: "Operator",
      image: "",
    },
  ];

  return (
    <main className="pb-10 mx-auto" id="job-dashboard">
      <div className="px-4 py-2">
        <div className="bg-[#22244D] mx-auto flex flex-col gap-14 max-w-[70.75rem]">
          <div className="border rounded-sm flex flex-col border-[#46476a]">
            <div className="flex flex-col lg:gap-4 lg:flex-row divide-y-[1.5px] lg:divide-x-[1.5px] lg:divide-y-0 border-b divide-[#46476a] border-[#46476a]">
              <TextFilter onTextFilterChange={handleFilterChange} />
              <LocationFilter onLocationFilterChange={handleLocationChange} />
            </div>
            <div className="flex flex-col px-4 pt-4 pb-2 w-full gap-4">
              <MultiSelectFilter
                selectedJobFunction={selectedJobFunction}
                setSelectedJobFunction={setSelectedJobFunction}
                selectedJobType={selectedJobType}
                setSelectedJobType={setSelectedJobType}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="py-5 px-4">
        <div className="flex flex-col gap-5 mx-auto max-w-[70.75rem]">
          {false ? (
            <>
              <Skeleton className="h-[1.6rem] w-[10.2rem]" />
              <div className="flex flex-col gap-3">
                {Array.from({ length: 3 }).map((_, index) => (
                  <Card.Skeleton key={index} />
                ))}
              </div>
            </>
          ) : (
            <>
              <p className="text-sm text-white">
                Showing <span className="font-bold">{filteredjobs.length}</span> jobs
              </p>
              <div className="flex flex-col gap-3">
                {fakeData.map((job) => (
                  <Card key={job.role} job={job} />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </main>
  );
};
export default JobsPage;
