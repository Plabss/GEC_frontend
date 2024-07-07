'use client';
import { useEffect, useState } from "react";
import { useRouter,useSearchParams } from "next/navigation";
import UniversityCard from "./Shared/UniversityCard";

const UniversityResults = () => {
  const [filteredUniversities, setFilteredUniversities] = useState({});
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!router.isReady) {
      return;
    }

    const fetchFilteredUniversities = async () => {
      try {
        const query = searchParams.toString();
        console.log("Query parameters:", query);  // Debugging log

        const res = await fetch(`http://localhost:8080/course/get-filtered-universities?${query}`);
        const data = await res.json();

        console.log("Fetched data:", data);  // Debugging log

        const groupedResults = data.data.reduce((acc, course) => {
          if (!acc[course.university]) {
            acc[course.university] = [];
          }
          acc[course.university].push(course);
          return acc;
        }, {});

        setFilteredUniversities(groupedResults);
      } catch (error) {
        console.error("Error fetching filtered universities:", error);
      }
    };

    fetchFilteredUniversities();
  }, [router.isReady, router.query]);

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      {Object.keys(filteredUniversities).length > 0 ? (
        <ul className="grid gap-x-4 gap-y-4 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {Object.entries(filteredUniversities).map(([university, courses], index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <UniversityCard university={university} courses={courses} />
            </div>
          ))}
        </ul>
      ) : (
        <p>No courses found</p>
      )}
    </div>
  );
};

export default UniversityResults;
