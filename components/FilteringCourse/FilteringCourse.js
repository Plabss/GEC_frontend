const FilteringCourse = () => {
    return (
        <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-800">University of Toronto</h2>
                <p className="text-gray-600">Canada</p>
                <a href="#" className="text-blue-500 mt-2 block">View all courses</a>
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
                        <span className="ml-2 text-gray-800">THE World Ranking: 21</span>
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
                        <span className="ml-2 text-gray-800">International students: 27130</span>
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
                        <span className="ml-2 text-gray-800">English Courses available</span>
                    </div>
                </div>
                <button className="mt-4 w-full border border-gray-300 text-gray-800 px-4 py-2 rounded-full hover:bg-gray-100 transition">
                    View details
                </button>
            </div>
        </div>
    );
};

export default FilteringCourse;