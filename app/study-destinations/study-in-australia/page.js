
import HomeBanner from '@/components/Home/HomeBanner'
import FAQ from '@/components/Shared/FAQ'
import PopularUniversity from '@/components/Shared/PopularUniversity'
import StudyInAus from '@/components/Study destinations/Study in Aus/StudyInAus'
import React from 'react'

import one from '@/assets/testimonial/1.jpg'
import Testimonials from '@/components/Shared/Testimonials'

export default function page() {
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
  return (
    <div >
        {/* <HomeBanner></HomeBanner> */}
        <StudyInAus></StudyInAus>
        <PopularUniversity country={"Australia"}></PopularUniversity>
        <Testimonials testimonials={testimonials}></Testimonials>
        <FAQ faqData={faqData}></FAQ>
    </div>
  )
}
