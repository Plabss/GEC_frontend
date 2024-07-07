/* eslint-disable react/no-unescaped-entities */

import Image from "next/image";

import one from "@/assets/study-destinations/Aus/Circular_Quay__Sydney__Australia..webp";
import two from "@/assets/study-destinations/Aus/Perth_Skyline__Western_Australia.webp";
import three from "@/assets/study-destinations/Aus/Yarra_River__Melbourne__Australia.jpg";

const StudyInUK = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center py-12">
      <div className="p-8 bg-white max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Text Content */}
          <div>
            <h2 className="text-3xl font-bold mb-4">
              Studying in UK is an experience.<br></br>
              Here’s why
            </h2>
            <p className="mb-4">
              UK isn't just a place to study; it's an adventure waiting
              to happen! From bustling city life to breathtaking landscapes,
              UK is the perfect spot to learn, grow, and make memories
              that last a lifetime. Ready for the journey?
            </p>
            <h3 className="text-2xl font-bold mb-2">Why study in UK?</h3>
            <p className="mb-4">
              Here’s{" "}
              <a href="#" className="text-blue-500">
                why study in UK
              </a>{" "}
              has become a popular destination among international students:
            </p>
            <ol className="list-decimal pl-5 mb-4">
              <li className="mb-2">
                <strong>Student-friendly cities:</strong> UK is home to
                the most student-friendly cities. According to the QS Best
                Student Cities 2024, 7 of the top 50 student cities are in
                UK.
              </li>
              <li className="mb-2">
                <strong>World-recognised universities:</strong> UK is
                known for its good quality...
              </li>
            </ol>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
              Read More
            </button>
          </div>

          {/* Image Content */}
          <div>
            <div className="mb-4">
              <Image
                src={one}
                alt="UK image 1"
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              <Image
                src={two}
                alt="UK image 2"
                className="w-full h-auto rounded-lg"
              />
              <Image
                src={three}
                alt="UK image 3"
                className="w-full h-auto rounded-lg"
              />
              <Image
                src={two}
                alt="UK image 4"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudyInUK;
