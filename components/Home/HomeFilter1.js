"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function HomeFilter1() {
  const [subject, setSubject] = useState("");
  const [level, setLevel] = useState("");
  const [destination, setDestination] = useState("");
  const [ieltsScore, setIeltsScore] = useState("");
  const [subjectSuggestions, setSubjectSuggestions] = useState([]);
  const router = useRouter();

  const handleSearch = () => {
    const query = new URLSearchParams({
      subject,
      level,
      destination,
      ieltsScore,
    }).toString();

    router.push(`/find-a-course/course?${query}`);
  };

  const handleSubjectChange = async (e) => {
    const value = e.target.value;
    setSubject(value);

    if (value) {
      try {
        const res = await fetch(`http://localhost:8080/course/get-filtered-course?subject=${value}`);
        const data = await res.json();
        //console.log(data.data)
        const suggestions = data.data.map(course => course.subject);
        setSubjectSuggestions([...new Set(suggestions)]);
      } catch (error) {
        console.error('Error fetching subject suggestions:', error);
      }
    } else {
      setSubjectSuggestions([]);
    }
  };

  const selectSuggestion = (suggestion) => {
    setSubject(suggestion);
    setSubjectSuggestions([]);
  };

  return (
    <div className="p-4">
      <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 p-4">
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="Enter course subject e.g. Law"
            value={subject}
            onChange={handleSubjectChange}
            className="border border-gray-300 p-2 rounded w-full"
          />
          {subjectSuggestions.length > 0 && (
            <ul className="absolute bg-white border border-gray-300 w-full rounded mt-1 max-h-40 overflow-y-auto z-20">
              {subjectSuggestions.map((suggestion, index) => (
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
            value={level}
            onChange={(e) => setLevel(e.target.value)}
            className="border border-gray-300 p-2 rounded w-full"
          >
            <option value="">Select study level</option>
            <option value="undergraduate">Undergraduate</option>
            <option value="postgraduate">Postgraduate</option>
            <option value="phD">PhD</option>
          </select>
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
          <input
            type="number"
            placeholder="IELTS score"
            value={ieltsScore}
            onChange={(e) => setIeltsScore(e.target.value)}
            className="border border-gray-300 p-2 rounded w-full"
          />
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
