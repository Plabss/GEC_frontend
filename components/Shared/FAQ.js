import FAQItem from "../Study Abroad Steps/FAQItem";


const FAQ = ({faqData}) => {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-6">Frequently asked questions</h2>
      {faqData.map((item, index) => (
        <FAQItem key={index} question={item.question} answer={item.answer} />
      ))}
    </div>
  );
};

export default FAQ;

