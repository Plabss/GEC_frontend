"use client";

import { useState } from "react";
import { courses } from "../../DB/data";
import UniversityCard from "./UniversityCard";

export default function PopularUniversity({ country }) {
  const [destination, setDestination] = useState(country);
  const results = courses.filter((course) => {
    return destination ? course.destination === destination : true;
  });
  const groupedResults = results.reduce((acc, course) => {
    if (!acc[course.university]) {
      acc[course.university] = [];
    }
    acc[course.university].push(course);
    return acc;
  }, {});
  console.log(groupedResults);
  return (
    <div className="sm:mx-6 md:mx-16">
      <span className="my-8 text-blue-600 dark:text-blue-500 font-semibold pl-6 relative before:absolute before:top-1/2 before:left-0 before:w-5 before:h-px before:bg-blue-600 dark:before:bg-blue-500 before:rounded-full">
        Popular Universities in {`${country}`}
      </span>
      <div className="p-4 bg-gray-100 min-h-screen">
        {Object.keys(groupedResults).length > 0 ? (
          <ul className="grid gap-x-4 gap-y-4 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {Object.entries(groupedResults).map(
              ([university, courses], index) => (
                <div
                  key={index}
                  className="bg-white shadow-lg rounded-lg overflow-hidden"
                >
                  <UniversityCard university={university} courses={courses} />
                </div>
              )
            )}
          </ul>
        ) : (
          <p>No courses found</p>
        )}
      </div>
    </div>
  );
}
