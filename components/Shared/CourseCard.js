'use-client'
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const CourseCard = ({ course }) => {
  const handleSearch = () => {
    // setFilteredCourses([course]);
    // router.push("/find-a-course/course");
    console.log("first");
  };
  const router = useRouter();
  const [token, setToken] = useState(null)
  const [userId, setUserId] = useState(null)
  useEffect(() => {
    if (typeof window !== "undefined") {
      const localToken = localStorage.getItem("token");
      const Id = localStorage.getItem("_id");
      setToken(localToken);
      setUserId(Id);
    }

    const handleStorageChange = () => {
      const localToken = localStorage.getItem("token");
      const Id = localStorage.getItem("_id");
      setToken(localToken);
      setUserId(Id);
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);
  const handleAddToCart = async () => {
    const response = await fetch(`http://localhost:8080/students/get-courses-from-cart/${userId}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });
    const data = await response.json();
    const UserCart = data.data;

    if (token) {
      console.log("UserCart0000000000000000000000000000", UserCart);
      if (UserCart.length) {
        const response = await fetch(`http://localhost:8080/students/patch-courses-to-cart/${userId}`, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(course),
        });
        const data = await response.json();
        const UserCart = data.data;
        console.log(UserCart);
      } else {
        const response = await fetch(`http://localhost:8080/students/post-courses-to-cart/${userId}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(course),
        });
        const data = await response.json();
        const UserCart = data.data;
        console.log(UserCart);
      }

    }
    else {
      router.push("/login");
    }




  }
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden relative">
      <div className="absolute top-4 right-4 bg-blue-500 text-white p-2 rounded-full cursor-pointer">
        <button onClick={handleAddToCart}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m8-8H4"
            />
          </svg>
        </button>
      </div>
      <div className="p-6">
        <h2 className="text-xl font-semibold text-gray-800">
          {course.subject}
        </h2>
        <p className="text-gray-600">{course.university}</p>
        <p className="text-gray-600">Level: {course.level}</p>
        <p className="text-gray-600">Destination: {course.destination}</p>
        <p className="text-gray-600">IELTS Score: {course.ieltsScore}</p>
        <div className="mt-4">
          <div className="flex items-center">
            <svg
              className="w-6 h-6 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 14l9-5-9-5-9 5 9 5z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 14l6.16-3.422A12.083 12.083 0 0112 21a12.083 12.083 0 01-6.16-10.422L12 14z"
              />
            </svg>
            <span className="ml-2 text-gray-800">
              Location: {course.location}
            </span>
          </div>
          <div className="flex items-center mt-2">
            <svg
              className="w-6 h-6 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 8h10M7 12h4m1 8l-5-5m0 0l5-5m-5 5h12"
              />
            </svg>
            <span className="ml-2 text-gray-800">
              Campus City: {course.campusCity}
            </span>
          </div>
          <div className="flex items-center mt-2">
            <svg
              className="w-6 h-6 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 16l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
            <span className="ml-2 text-gray-800">
              Gross Tuition Fee: {course.tuitionFees}
            </span>
          </div>
          <div className="flex items-center mt-2">
            <svg
              className="w-6 h-6 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 4v16h16V4H4z"
              />
            </svg>
            <span className="ml-2 text-gray-800">
              Application Fee: {course.applicationFees}
            </span>
          </div>
          <div className="flex items-center mt-2">
            <svg
              className="w-6 h-6 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 14l9-5-9-5-9 5 9 5z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 14l6.16-3.422A12.083 12.083 0 0112 21a12.083 12.083 0 01-6.16-10.422L12 14z"
              />
            </svg>
            <span className="ml-2 text-gray-800">
              Duration: {course.duration}
            </span>
          </div>
        </div>
        <div className="mt-4 flex justify-between">
          <button className="w-full border border-gray-300 text-gray-800 px-4 py-2 rounded-full hover:bg-gray-100 transition mr-2">
            <Link href={`${course.courseDetailLink}`} target="_blank">
              View Details
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
