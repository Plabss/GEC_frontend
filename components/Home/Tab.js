"use client";

import React, { useState } from "react";
import HomeFilter1 from "./HomeFilter1";
import HomeFilter2 from "./HomeFilter2";


export default function Tab() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { title: "Courses", content: <HomeFilter1></HomeFilter1> },
    { title: "Universities", content: <HomeFilter2></HomeFilter2> },

  ];

  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  return (
    <div>
      <section className="relative pb-16 forInputFilter">
        <div className="max-w-7xl mx-auto bg-gray-100 px-4 sm:px-6 lg:px-8" style={{
          marginTop: "-5rem",
          backgroundColor: "white",
          borderRadius: "28% 29% 3% 3%"
        }}>
          <div className="border-b border-gray-200" style={{ marginTop: "1rem" }}>
            <nav className="-mb-px flex justify-center">
              {tabs.map((tab, index) => (
                <button
                  key={index}
                  className={`w-1/4 py-4 px-1 text-center border-b-2 font-medium text-sm p-2 focus:outline-none ${activeTab === index
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                    }`}
                  onClick={() => handleTabClick(index)}
                >
                  <b>{tab.title}</b>
                </button>
              ))}
            </nav>
          </div>
          <div className="mt-5">
            <div className="p-4 bg-white rounded-lg shadow-md">
              {tabs[activeTab].content}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
