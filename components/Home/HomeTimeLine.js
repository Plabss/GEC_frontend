import React from 'react';
import demo from '@/assets/LandingPage.jpg'

const steps = [
  { step: 1, title: 'Counselling', description: 'Our mentors will give you guidelines and help you in identifying a rightful path to follow.' },
  { step: 2, title: 'Choose Country', description: 'Country from the list of top-ranking universities of the World.' },
  { step: 3, title: 'Select Institute', description: 'Institute from the list of top-ranking universities in the world.' },
  { step: 4, title: 'Accept Letter of Offer', description: 'When you get the offer letter, accept it then do the payment of the tuition fee of that institute.' },
  { step: 5, title: 'Working Process', description: 'Preparation all documents through a structured process is essential for a smooth and successful visa application.' },
  { step: 6, title: 'Application submit and Get ready for interview', description: 'You can have the greatest background in the world on paper, but if you can’t perform, gain rapport, and articulate your skill set, you won’t get the job. So, here’s how to ace your next big interview.' },
  { step: 7, title: 'Get a VISA', description: 'After a few days probably one week you will go to the UKVI application center and receive your file (visa).' },
  { step: 8, title: 'Get ready to fly', description: 'After receiving your most awaited visa, get ready to fly. Wish you a flourishing and successful future!' }
];

const TimelineItem = ({ step, title, description, isLeftAligned }) => (
  <div className={`flex flex-col sm:flex-row transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl ${isLeftAligned ? 'sm:flex-row-reverse' : 'sm:flex-row'} items-center w-full ${isLeftAligned ? 'animate-fadeInLeft' : 'animate-fadeInRight'}`}>
    <div className="w-full sm:w-1/2">
      <div className="bg-white border-2 border-indigo-600 rounded-md p-4 shadow-lg">
        <h1 className="text-indigo-600 text-xl font-bold py-2">{`Step ${step}: ${title}`}</h1>
        <p className="text-gray-700 sm:text-sm text-xs">{description}</p>
      </div>
    </div>
    <div className="relative w-full sm:w-1/2 flex justify-center items-center mx-4">
      <div className="hidden sm:block h-full w-1 bg-gray-400"></div>
      <div className="absolute w-8 h-8 rounded-full bg-indigo-600 text-white text-center font-semibold">{step}</div>
    </div>
  </div>
);

const HomeTimeLine = () => {
  return (
    <div className="relative py-12 bg-fixed bg-cover bg-center" style={{backgroundImage:`url(${demo.src})`}}>
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-50"></div>
      <div className="relative z-10">
        <h2 className="text-4xl font-extrabold tracking-tight text-center sm:text-5xl mb-12 text-indigo-600">Global Education Care Ltd Process</h2>
        <div className="max-w-7xl mx-auto w-full px-4 font-serif">
          {steps.map((item, index) => (
            <div className="mb-8" key={index}>
              <TimelineItem 
                step={item.step} 
                title={item.title} 
                description={item.description} 
                isLeftAligned={index % 2 === 0} 
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomeTimeLine;

