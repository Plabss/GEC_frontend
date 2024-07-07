/* eslint-disable react/no-unescaped-entities */
'use client'

import Image from 'next/image';
import { useState } from 'react';

export default function GetFreeCounseling() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    destination: '',
    office: '',
    startDate: '',
    studyLevel: '',
    consent: false,
    communication: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <div className="flex flex-col lg:flex-row">
      <div className="lg:w-1/3 p-8 bg-gray-100">
        <div className='bg-gradient-to-r from-cyan-500 to-blue-500'>
          <h3 className="text-white font-bold text-2xl mb-4 text-center"><span className='inline-block p-6'>Get FREE Counselling</span></h3>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First name*</label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last name*</label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address*</label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
          </div>
          <div>
            <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">Mobile number*</label>
            <input
              type="text"
              name="mobile"
              id="mobile"
              value={formData.mobile}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
          </div>
          <div>
            <label htmlFor="destination" className="block text-sm font-medium text-gray-700">Your preferred study destination</label>
            <select
              name="destination"
              id="destination"
              value={formData.destination}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            >
              <option value="">Select</option>
              <option value="canada">Canada</option>
              <option value="uk">UK</option>
              <option value="usa">USA</option>
            </select>
          </div>
          <div>
            <label htmlFor="office" className="block text-sm font-medium text-gray-700">Your nearest GEC office</label>
            <select
              name="office"
              id="office"
              value={formData.office}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            >
              <option value="">Select</option>
              <option value="dhaka">Dhaka</option>
              <option value="chittagong">Chittagong</option>
            </select>
          </div>
          <div>
            <label htmlFor="startDate" className="block text-sm font-medium text-gray-700">When do you plan to study?</label>
            <select
              name="startDate"
              id="startDate"
              value={formData.startDate}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            >
              <option value="">Select</option>
              <option value="2024">2024</option>
              <option value="2025">2025</option>
            </select>
          </div>
          <div>
            <label htmlFor="studyLevel" className="block text-sm font-medium text-gray-700">Preferred study level</label>
            <select
              name="studyLevel"
              id="studyLevel"
              value={formData.studyLevel}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            >
              <option value="">Select</option>
              <option value="undergraduate">Undergraduate</option>
              <option value="postgraduate">Postgraduate</option>
            </select>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              name="consent"
              id="consent"
              checked={formData.consent}
              onChange={handleChange}
              className="h-4 w-4 text-green-600 border-gray-300 rounded"
            />
            <label htmlFor="consent" className="ml-2 block text-sm text-gray-700">
              I understand that when I attend this event, GEC will disclose the registration information I provide to the University and Institution partners that are participating in the event
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              name="communication"
              id="communication"
              checked={formData.communication}
              onChange={handleChange}
              className="h-4 w-4 text-green-600 border-gray-300 rounded"
            />
            <label htmlFor="communication" className="ml-2 block text-sm text-gray-700">
              By registering, I agree to GEC contacting me by phone, email or SMS about my enquiry.
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              name="updates"
              id="updates"
              checked={formData.updates}
              onChange={handleChange}
              className="h-4 w-4 text-green-600 border-gray-300 rounded"
            />
            <label htmlFor="updates" className="ml-2 block text-sm text-gray-700">
              I’d love to get useful communication from GEC or our institution partners, about study, scholarships and IELTS.
            </label>
          </div>
          <button type="submit" className="w-full bg-green-600 text-white py-2 rounded-md shadow-sm hover:bg-green-700">
            Help me study abroad
          </button>
        </form>
      </div>
      <div className="lg:w-2/3 p-8 md:px-16">
        <h2 className="text-blue-500 font-bold text-3xl mb-4">GEC's Canada, UK & USA Education Roadshow: Enroll for Sep/Jan Intake</h2>
        <p className="text-gray-800 mb-4">5th July 2024, 10:00 AM - 06:00 PM</p>
        <p className="text-gray-800 mb-4">Sheraton Dhaka (Ball Room)</p>
        <p className="text-gray-800 mb-4">
          Get ready to take the flight! Join us on July 5, 2024, at Sheraton Banani for GEC's Canada, USA & UK Education Roadshow,
          where we will be setting sail for the upcoming September and January intakes.
        </p>
        <ul className="list-disc list-inside text-gray-800 mb-4">
          <li>Entry is free, and application fee waivers are available.</li>
          <li>With GEC Fast Lane, receive an offer in principle within 48 hours.</li>
          <li>Register for IELTS at the event.</li>
          <li>Take advantage of on-the-spot applications - simply bring your documents and apply right there!</li>
        </ul>
        <p className="text-gray-800 mb-4">Don't miss out on this extraordinary opportunity!</p>
        <h3 className="text-blue-500 font-bold text-2xl mb-2 ">The GEC Advantage</h3>
        <ul className="list-disc list-inside text-gray-800 mb-4">
          <li>A global leader in international education services</li>
          <li>Australian Securities Exchange listed company</li>
          <li>120+ offices in over 30 countries</li>
          <li>Partner to over 700 leading education institutions</li>
          <li>900+ expert education counsellors</li>
          <li>One student placed every 14 minutes</li>
          <li>Placed students into more than 500,000 courses</li>
        </ul>
        <h3 className="text-blue-500 font-bold text-2xl mb-2">Get expert guidance on</h3>
        <ul className="list-disc list-inside text-gray-800 mb-4">
          <li>Choosing the right course and university</li>
          <li>Scholarships, grants and bursaries</li>
          <li>Application submission and tracking</li>
          <li>Offer acceptance and visa information</li>
          <li>Pre-departure orientation and assistance</li>
        </ul>
      </div>

    </div>
  );
}
