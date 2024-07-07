'use client'
import { useState } from "react";
import Image from "next/image";
import one from '@/assets/testimonial/1.jpg'

const testimonials = [
  {
    name: "John Doe",
    title: "SEO Kelasi-AI SARL",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum at ipsa pariatur culpa iste dolore aliquid officia modi quas vel inventore animi, error commodi distinctio eum accusamus? Accusantium, tempora quisquam!",
    image: one,
  },
  {
    name: "Jane Smith",
    title: "Marketing Director",
    review: "Excellent service, very professional and supportive. Highly recommend!",
    image: one,
  },
  {
    name: "Alice Johnson",
    title: "Product Manager",
    review: "The team is amazing! They helped us reach our goals in no time.",
    image: one,
  },
  {
    name: "Robert Brown",
    title: "CEO Tech Solutions",
    review: "Outstanding experience. I would definitely work with them again.",
    image: "/images/sidebiew4.webp",
  },
  {
    name: "Emily Davis",
    title: "HR Specialist",
    review: "Very reliable and great results. Exceeded our expectations.",
    image: "/images/sidebiew5.webp",
  },
];

const HomeTestimonial
 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 space-y-16">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="font-bold text-gray-800 dark:text-white text-3xl">Client’s Say About Us</h1>
        </div>
        <div className="relative flex flex-col items-center">
          <div className="p-6 w-full mx-auto max-w-4xl md:p-10 rounded-2xl bg-white dark:bg-gray-950 border border-gray-100/10 dark:border-gray-900 shadow-2xl shadow-gray-700/40 dark:shadow-none flex flex-col items-center justify-center text-center space-y-6 md:space-y-8">
            <Image
              src={testimonials[currentIndex].image}
              width={1900}
              height={1300}
              alt="Author avatar"
              className="w-20 md:w-24 h-20 md:h-24 object-cover rounded-full"
            />
            <div className="space-y-2 text-center flex-1">
              <h2 className="text-xl font-semibold leading-none text-gray-800 dark:text-gray-200">
                {testimonials[currentIndex].name}
              </h2>
              <p className="text-sky-700 dark:text-sky-300">{testimonials[currentIndex].title}</p>
            </div>
            <p className="font-medium text-gray-700 dark:text-gray-300 max-w-md">
              {testimonials[currentIndex].review}
            </p>
            <div className="mx-auto flex items-center gap-2">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-600 text-2xl">★</span>
              ))}
            </div>
          </div>
          <button
            aria-label="Prev Button"
            className="outline-none absolute left-0 top-1/2 -translate-y-1/2 bg-gray-100 dark:bg-gray-900 p-4 rounded-full text-gray-800 dark:text-gray-200"
            onClick={handlePrev}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6">
              <path fillRule="evenodd" d="M18 10a.75.75 0 01-.75.75H4.66l2.1 1.95a.75.75 0 11-1.02 1.1l-3.5-3.25a.75.75 0 010-1.1l3.5-3.25a.75.75 0 111.02 1.1l-2.1 1.95h12.59A.75.75 0 0118 10z" clipRule="evenodd" />
            </svg>
          </button>
          <button
            aria-label="Next Button"
            className="outline-none absolute right-0 top-1/2 -translate-y-1/2 bg-gray-100 dark:bg-gray-900 p-4 rounded-full text-gray-800 dark:text-gray-200"
            onClick={handleNext}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6">
              <path fillRule="evenodd" d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z" clipRule="evenodd" />
            </svg>
          </button>
          <div className="flex items-center gap-1 absolute left-1/2 -translate-x-1/2 -bottom-10">
            {testimonials.map((_, index) => (
              <span
                key={index}
                className={`cursor-pointer w-4 h-2 rounded-full transition ${
                  currentIndex === index ? "bg-blue-600" : "bg-gray-400 dark:bg-gray-800"
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeTestimonial;
