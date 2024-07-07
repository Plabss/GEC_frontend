"use client";
import Image from "next/image";
import Link from "next/link";
import HomeBanner from "@/assets/Top_Uni._banner.jpg_.webp";

export default function Banner() {
  return (
    <>
      <main>
        <section className="relative bg-cover bg-center bg-no-repeat pt-32 lg:pt-24 pb-32 lg:pb-4" style={{ backgroundImage: `url(${HomeBanner.src})` }}>
          <div className="absolute inset-0 z-0">
            <Image src={HomeBanner} alt="Landing Page" layout="fill" objectFit="cover" className="w-full h-full" />
          </div>
          <div className="relative z-10 mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 flex items-center justify-center lg:justify-start">
            <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 lg:-translate-x-0 lg:-translate-y-0 lg:left-0 lg:top-16 w-40 h-40 skew-x-6 opacity-50 dark:opacity-80 rounded-full bg-gradient-to-bl from-green-600 to-sky-400 blur-3xl flex" />
            <div className="flex flex-col text-center lg:text-left gap-8 lg:gap-10 xl:gap-12 relative max-w-4xl lg:max-w-none w-full lg:w-1/2">
              <div className="space-y-8 xl:space-y-10 lg:py-12">
                <h1 className="text-green-950 dark:text-white text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold" style={{color:'whitesmoke'}}>
                  The only all in one{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-br to-sky-600" style={{color:'black'}}>
                    Tool
                  </span>{" "}
                  you need for your Clinic
                </h1>
                <p className="text-white-700 dark:text-light-300 max-w-md mx-auto lg:mx-0" style={{color:'whitesmoke'}}>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Laudantium omnis, molestias expedita soluta facilis sapiente
                  incidunt.
                </p>
                <div className="flex flex-wrap items-center gap-4 z-30 sm:w-max sm:flex-nowrap mx-auto lg:mx-0">
                  <Link
                    href="#"
                    className="px-5 h-12 flex items-center sm:w-max w-full justify-center bg-gradient-to-br from-green-700 to-sky-600 text-white rounded-lg ease-linear transition"
                  >
                    Get Started
                  </Link>
                  <Link
                    href="#"
                    className="px-5 h-12 flex items-center sm:w-max w-full justify-center gap-x-3 border border-gray-200 dark:border-gray-900/60 rounded-lg text-green-800 dark:text-gray-100 bg-green-50 dark:bg-gray-900"
                  >
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    Watch Demo
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
