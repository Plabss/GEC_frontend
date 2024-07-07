'use client'
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import CourseCard from "./Shared/CourseCard";

const CourseResults = () => {
  const [courses, setCourses] = useState([]);
  const searchParams = useSearchParams();

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const query = searchParams.toString();
        console.log("Query parameters:", query);  // Debugging log

        const res = await fetch(`http://localhost:8080/course/get-filtered-course?${query}`);
        const data = await res.json();

        console.log("Fetched data:", data);  // Debugging log

        setCourses(data.data);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchCourses();
  }, [searchParams,courses]);  // Re-run the effect if searchParams change

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      {courses.length > 0 ? (
        <ul className="grid gap-x-4 gap-y-6 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course, index) => (
            <li
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105"
            >
              <CourseCard course={course} />
            </li>
          ))}
        </ul>
      ) : (
        <div className="flex justify-center items-center h-full">
          <p className="text-gray-600 text-lg">No courses found</p>
        </div>
      )}
    </div>
  );
};

export default CourseResults;
