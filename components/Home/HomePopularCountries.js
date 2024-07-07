import Image from "next/image";
import Link from "next/link";

import UK from "@/assets/images/1.jpg";
import USA from "@/assets/images/8.jpg";
import CAD from "@/assets/images/2.jpg";
import AUS from "@/assets/images/3.jpg";
import DEN from "@/assets/images/4.jpg";
import NZ from "@/assets/images/5.jpg";
import MAL from "@/assets/images/6.jpg";
import DUBAI from "@/assets/images/7.jpg";
import FRA from "@/assets/images/9.jpg";

const CountryCard = ({ cover, title, sumary,route }) => {
  return (
    <div className="rounded-md flex flex-col bg-white dark:bg-gray-950 shadow-lg shadow-gray-200/60 dark:shadow-none border border-gray-200/70 dark:border-gray-800/80 p-4 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl">
      <div className="relative">
        <Image
          src={cover}
          alt="illustration"
          width={1300}
          height={800}
          className="w-full rounded aspect-[5/3] object-cover bg-gray-100 dark:bg-gray-900"
        />
        {/* <div className="absolute inset-x-2 bottom-2 px-3 py-1.5 rounded-sm bg-gray-800/80 backdrop-filter backdrop-blur-sm">
                <p className="font-semibold text-gray-100">By {author}</p>
                <p className="text-sm text-gray-300">{published_date}</p>
            </div> */}
      </div>
      <Link
        href={`/study-destinations/${route}`}
        className="mt-5 text-xl font-semibold text-gray-900 dark:text-white"
      >
        {title}
      </Link>
      <p className="text-gray-700 dark:text-gray-300 line-clamp-2 my-4">
        {sumary}
      </p>
      <div className="flex flex-1 items-end">
        <Link
          href={`/study-destinations/${route}`}
          className="flex items-center gap-x-2 text-blue-600 dark:text-blue-500"
        >
          Read more
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-4 h-4"
          >
            <path
              fillRule="evenodd"
              d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
              clipRule="evenodd"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};
const posts = [
  {
    id: 1,
    cover: UK,
    title: "Study in UK",
    route:"study-in-uk",
    sumary:
      "The UK is one of the world's most popular destinations to study higher education with more than 500,000 international Students.",
  },
  {
    id: 2,
    cover: USA,
    title: "Study in USA",
    route:"study-in-usa",
    sumary:
      "The Majority of the world's International students have studies abroad in the United States of America (USA) ",
  },
  {
    id: 3,
    cover: CAD,
    title: "Study in Canada",
    route:"study-in-canada",
    sumary:
      "Remember that everyone says that this is a milestone after which things are getting easier and easier?",
  },
  {
    id: 4,
    cover: AUS,
    route:"study-in-australia",
    title: "Study in Australia",
    sumary:
      "Australia is indeed known for offering a high-quality educational experience to students from around the world.",
  },
  {
    id: 5,
    cover: DEN,
    title: "Study in Denmark",
    route:"study-in-denmark",
    sumary:
      "Denmark is located in northern Europe and is part of Scandinavia. Denmark consists of the Jutland peninsula, the larger island of Zealand, Funen & etc.",
  },
  {
    id: 6,
    cover: NZ,
    title: "Study in New Zealand",
    route:"study-in-new-zealand",
    sumary:
      "ew Zealand is a country in the southwestern Pacific Ocean consisting of 2 main islands, both marked by volcanoes and glaciation.",
  },
  {
    id: 7,
    cover: MAL,
    title: "Study in Malta",
    route:"study-in-malta",
    sumary:
      "Malta is a Southern European island nation in the Mediterranean, off the coast of Sicily off the coast of Sicily (Italy) and close to Tunisia and Libya.",
  },
  {
    id: 8,
    cover: DUBAI,
    title: "Study in Dubai",
    route:"study-in-dubai",
    sumary:
      "Dubai's higher education offers global students dynamic programs, cultural diversity, and exceptional career prospects in a vibrant cityscape.",
  },
  {
    id: 9,
    cover: FRA,
    title: "Study in Ireland",
    route:"study-in-ireland",
    sumary:
      "One of the most well-liked study abroad locations in Europe is Ireland. Its institutions provide excellent instruction in an atmosphere that is both traditional and modern.",
  },
];
const HomePopularCountries = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 space-y-10">
        <div className="text-center space-y-6 max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white capitalize">
            Top Dream Study Destinations Around the World
          </h1>
          <p className="text-gray-700 dark:text-gray-300">
            Choose your dream country and turn the page on your future with an
            unforgettable international study experience! (OR) Let the world be
            your classroom - explore top study destinations and ignite your
            academic passion abroad!
          </p>
          {/* <div className="flex justify-center">
                    <Link href="#" className="px-5 py-2.5 rounded-md border border-gray-100 dark:border-gray-900 text-blue-600 dark:text-gray-300 flex items-center gap-x-3">
                        See More
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </Link>
                </div> */}
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.slice(0, 9).map((post) => (
            <CountryCard key={post.id} {...post} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default HomePopularCountries;
