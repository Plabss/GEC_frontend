import Image from 'next/image';
import Link from 'next/link';
import studyAbroadImage from '@/assets/study-abroad-steps/study abroad.png';

const steps = [
    { title: "Low Tuition Fee Universities in Denmark for Bachelor's in Science?", link: "/why-study-abroad" },
    { title: "Best Agency in Sylhet For Student Visa?", link: "/where-and-what-to-study" },
    { title: "আইইএলটিএস রিডিং অংশের জন্য কীভাবে প্রস্তুতি নিতে হবে?", link: "/how-to-apply" },
    { title: "কানাডার ভিসা অনুমোদনের হার কমার কারণগুলো কি কি?", link: "/after-receiving-offer" },
    { title: "What are the best practices for preparing for scholarship interviews?", link: "/prepare-to-depart" },
    { title: "Arrive and thrive", link: "/arrive-and-thrive" }
];

export default function BlogTopSection() {
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
                <h2 className="text-2xl font-bold mb-4">Clearing The Doubts</h2>
                <ul className="space-y-2">
                    {steps.map((step, index) => (
                        <li key={index} className="bg-white p-4 rounded-lg shadow-md hover:bg-gray-100 cursor-pointer transition-colors">
                            <Link href={step.link}>
                                <div className='flex justify-between'>
                                    <p>{step.title}</p>
                                    <p style={{ color: 'blue' }}>{">>"}</p>
                                </div>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}