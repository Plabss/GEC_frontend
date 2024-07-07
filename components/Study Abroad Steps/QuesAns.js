import FAQItem from "./FAQItem";

const QuesAns = () => {
  const qa = [
    {
      question: 'Why study Abroad?',
      answer: 'answer..................',
    },
    {
      question: 'Where and What to study?',
      answer: `If your shortlisted course has an IDP FastLane tag, you can check if you’re likely to be accepted even before applying. You will need to first create an IDP account and complete your academic/FastLane profile. If you meet the entry criteria for the course, you’ll receive an Offer in Principle from the university. If you choose to apply using the Offer in Principle, the institution will process your application 2 to 3 times faster!`,
    },
    {
      question: 'How do I apply?',
      answer: 'If your shortlisted course has an IDP FastLane tag, you can check if you’re likely to be accepted even before applying. You will need to first create an IDP account and complete your academic/FastLane profile. If you meet the entry criteria for the course, you’ll receive an Offer in Principle from the university. If you choose to apply using the Offer in Principle, the institution will process your application 2 to 3 times faster!If your shortlisted course has an IDP FastLane tag, you can check if you’re likely to be accepted even before applying. You will need to first create an IDP account and complete your academic/FastLane profile. If you meet the entry criteria for the course, you’ll receive an Offer in Principle from the university. If you choose to apply using the Offer in Principle, the institution will process your application 2 to 3 times faster!If your shortlisted course has an IDP FastLane tag, you can check if you’re likely to be accepted even before applying. You will need to first create an IDP account and complete your academic/FastLane profile. If you meet the entry criteria for the course, you’ll receive an Offer in Principle from the university. If you choose to apply using the Offer in Principle, the institution will process your application 2 to 3 times faster!If your shortlisted course has an IDP FastLane tag, you can check if you’re likely to be accepted even before applying. You will need to first create an IDP account and complete your academic/FastLane profile. If you meet the entry criteria for the course, you’ll receive an Offer in Principle from the university. If you choose to apply using the Offer in Principle, the institution will process your application 2 to 3 times faster!',
    },
    {
      question: 'After receiving a offer',
      answer: 'Information about available help...',
    },
    {
      question: 'Prepare to depart',
      answer: 'Information about available help...',
    },
    {
      question: 'Arrive and thrive',
      answer: 'Information about available help...',
    },
  ];

  return (
    <div className="p-8">
      {/* <h2 className="text-2xl font-bold mb-6">Frequently asked questions</h2> */}
      {qa.map((item, index) => (
        <FAQItem key={index} question={item.question} answer={item.answer} />
      ))}
    </div>
  );
};

export default QuesAns;

