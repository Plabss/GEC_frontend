"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function HomeFilter2() {
  const [university, setUniversity] = useState("");
  const [destination, setDestination] = useState("");
  const [universitySuggestions, setUniversitySuggestions] = useState([]);
  const [allUniversities, setAllUniversities] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetchUniversities = async () => {
      try {
        const res = await fetch(`http://localhost:8080/course/get-all-universities`, {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
        });
        const data = await res.json();
        setAllUniversities(data.data);
      } catch (error) {
        console.error('Error fetching universities:', error);
      }
    };

    fetchUniversities();
  }, []);

  const handleSearch = () => {
    const queryParams = new URLSearchParams();
    if (university) queryParams.append("university", university);
    if (destination) queryParams.append("destination", destination);

    router.push(`/find-a-course/university?${queryParams.toString()}`);
  };

  const handleUniversityChange = (e) => {
    const value = e.target.value;
    setUniversity(value);

    if (value) {
      const suggestions = allUniversities
        .filter((uni) => uni.toLowerCase().includes(value.toLowerCase()));
      setUniversitySuggestions(suggestions);
    } else {
      setUniversitySuggestions([]);
    }
  };

  const selectSuggestion = (suggestion) => {
    setUniversity(suggestion);
    setUniversitySuggestions([]);
  };

  return (
    <div className="p-4">
      <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 p-4">
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="Search by university name"
            value={university}
            onChange={handleUniversityChange}
            className="border border-gray-300 p-2 rounded w-full"
          />
          {universitySuggestions.length > 0 && (
            <ul className="absolute bg-white border border-gray-300 w-full rounded mt-1 max-h-40 overflow-y-auto z-20">
              {universitySuggestions.map((suggestion, index) => (
                <li
                  key={index}
                  onClick={() => selectSuggestion(suggestion)}
                  className="p-2 cursor-pointer hover:bg-gray-200"
                >
                  {suggestion}
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="flex-1">
          <select
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className="border border-gray-300 p-2 rounded w-full"
          >
            <option value="">Select a study destination</option>
            <option value="USA">USA</option>
            <option value="UK">UK</option>
            <option value="Canada">Canada</option>
            <option value="Australia">Australia</option>
          </select>
        </div>
        <div className="flex-1">
          <button
            onClick={handleSearch}
            className="bg-blue-500 text-white p-2 rounded w-full"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
}
