import FAQItem from "./FAQItem";

const FaqSection = () => {
  const faqData = [
    {
      question: 'What is the process to apply to foreign universities?',
      answer: 'Details about the application process...',
    },
    {
      question: 'How do I check if I can get in before I apply?',
      answer: `If your shortlisted course has an IDP FastLane tag, you can check if you’re likely to be accepted even before applying. You will need to first create an IDP account and complete your academic/FastLane profile. If you meet the entry criteria for the course, you’ll receive an Offer in Principle from the university. If you choose to apply using the Offer in Principle, the institution will process your application 2 to 3 times faster!`,
    },
    {
      question: 'How can I improve my acceptance chances?',
      answer: 'Details on improving acceptance chances...',
    },
    {
      question: 'Who can help me navigate through the process?',
      answer: 'Information about available help...',
    },
  ];

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-6">Frequently asked questions</h2>
      {faqData.map((item, index) => (
        <FAQItem key={index} question={item.question} answer={item.answer} />
      ))}
    </div>
  );
};

export default FaqSection;

