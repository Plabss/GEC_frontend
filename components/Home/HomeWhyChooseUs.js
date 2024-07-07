
import Link from "next/link";
import ProgressBar from "./ProgressBar";

const HomeWhyChooseUs = () => {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-5 flex flex-col md:flex-row gap-16">
        <div className="flex flex-col w-full md:w-1/2">
          <div className="space-y-4 max-w-xl">
            <span className="text-blue-600 dark:text-blue-500 font-semibold pl-6 relative before:absolute before:top-1/2 before:left-0 before:w-5 before:h-px before:bg-blue-600 dark:before:bg-blue-500 before:rounded-full">
              Why Choose Us
            </span>
            <h1 className="font-bold text-gray-800 dark:text-white text-3xl">
              We are here to help with best services
            </h1>
          </div>
          <p className="text-gray-700 dark:text-gray-300 mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <ul className="divide-y mt-5 text-gray-700 dark:text-gray-300">
            {[
              "OUR SUCCESS RATIO IS ALMOST 100%",
              "WE ARE 100% TRANSPARENT IN PROCESSING",
              "NO FILE OPENING PROCESSING FEES",
              "FREE COUNSELING & ASSESSMENT",
              "EXPERIENCED & EXPERT TEAM",
              "TOTAL PROCESSING THROUGH ONLINE",
              "WE WORK WITH PREVIOUS VISA REFUSAL FILE",
            ].map((advantage, index) => (
              <li key={index} className="flex items-center gap-x-4 py-3">
                <span className="w-5 h-5 flex items-center justify-center rounded-full bg-blue-700 dark:bg-blue-600 text-white">
                  ✓
                </span>
                {advantage}
              </li>
            ))}
          </ul>
          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: "16 Years", label: "Experiences" },
              { value: "2600+", label: "Partners Universities" },
              { value: "10+", label: "Countries" },
              { value: "165+", label: "Awards Win" },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-950 shadow-lg border p-6 rounded-lg text-center"
              >
                <span className="font-semibold text-xl text-gray-900 dark:text-white">
                  {item.value}
                </span>
                <span className="block text-gray-700 dark:text-gray-300">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
        <ProgressBar></ProgressBar>
      </div>
      <div className="mt-32 mx-16 sm:mt-16 sm:mx-16 md:mt-16 md:mx-16 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl">
        <Link href="/get-free-counseling">
          <button className="bg-blue-500 transform transition-all hover:scale-105 w-full md:p-16 font-bold uppercase text-xl hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
            Get Free Counseling
          </button>
        </Link>
      </div>
    </section>
  );
};

export default HomeWhyChooseUs;