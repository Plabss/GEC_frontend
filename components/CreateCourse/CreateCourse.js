'use client';
import { useState } from 'react';
import { toast } from 'react-toastify';

const initialFormData = {
  subject: '',
  level: '',
  destination: '',
  university: '',
  ieltsScore: '',
  location: '',
  campusCity: '',
  tuitionFees: '',
  applicationFees: '',
  duration: '',
  intake: '',
  worldRank: '',
  internationalStudent: '',
  courseDetailLink: '',
  universityDetailLink: ''
};

const CreateCourse = () => {
  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:8080/admin/create-course/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        const data = await res.json();
        console.log(data);
        toast("Course added successfully!");
        setFormData(initialFormData);
      } else {
        const errorData = await res.json();
        toast(errorData.message);
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-8 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Create a New Course</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {Object.keys(formData).map((key) => (
          <div key={key} className="flex flex-col">
            <label className="mb-2 text-sm font-semibold text-gray-700">{key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}:</label>
            <input
              className="border border-gray-300 p-2 rounded-lg w-full focus:outline-none focus:border-indigo-500"
              type={key === 'ieltsScore' ? 'number' : 'text'}
              name={key}
              value={formData[key]}
              onChange={handleChange}
              required
            />
          </div>
        ))}
        <button type="submit" className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition duration-300">Submit</button>
      </form>
    </div>
  );
};

export default CreateCourse;
