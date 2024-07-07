import Image from 'next/image';
import Link from 'next/link';
import studyAbroadImage from '@/assets/study-abroad-steps/study abroad.png';
import QuesAns from './QuesAns';

const steps = [
  { title: "Why study abroad?", link: "/why-study-abroad" },
  { title: "Where and what to study?", link: "/where-and-what-to-study" },
  { title: "How do I apply?", link: "/how-to-apply" },
  { title: "After receiving an offer", link: "/after-receiving-offer" },
  { title: "Prepare to depart", link: "/prepare-to-depart" },
  { title: "Arrive and thrive", link: "/arrive-and-thrive" }
];

export default function StudyAbroadSteps() {
  return (
    <div className="flex flex-col items-center md:flex-row md:justify-between py-10 px-6 md:px-16 md:py-16">
      <div className="md:w-1/2 mb-6 md:mb-0">
        <Image 
          src={studyAbroadImage}
          alt="Study Abroad"
          className="rounded-lg"
          width={500}
          height={500}
        />
      </div>
      <div className="md:w-1/2 space-y-4">
        <QuesAns></QuesAns>
      </div>
    </div>
  );
}