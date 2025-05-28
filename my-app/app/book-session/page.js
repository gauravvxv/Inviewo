'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import axios from 'axios';

export default function BookSessionPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone_number: '',
    domain: '',
    experience: '',
    bio: '',
    resume_link: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      name: form.name,
      email: form.email,
      phone_number: form.phone_number,
      domain: form.domain,
      experience: form.experience,
      bio: form.bio,
      resume_link: form.resume_link,
    };

    try {
      const { data } = await axios.post(
        'https://inviewo-pgback.onrender.com/api/booking',
        payload,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      console.log('Booking success:', data);

      localStorage.setItem('intervieweeDetails', JSON.stringify(data.booking.session_id));
      router.push('/profile');
    } catch (error) {
      console.error('Booking error:', error?.response?.data || error.message);
      alert('Something went wrong while booking. Please try again.');
    }
  };

  return (
    <div className="max-w-xl mx-auto p-8 bg-white rounded shadow mt-10">
      <a href="/">
        <button className="mb-4 text-black underline hover:text-indigo-800">
          ← Back to Home
        </button>
      </a>
      <h2 className="text-2xl font-bold mb-4">Book Your Session</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      <input
  type="text"
  name="phone_number"
  placeholder="Your Phone Number"
  value={form.phone_number}
  onChange={(e) => {
    const value = e.target.value;
    // Allow only digits, and only up to 10 characters
    if (/^\d{0,10}$/.test(value)) {
      handleChange(e);
    }
  }}
  maxLength={10}
  className="w-full p-2 border rounded"
  required
/>
        <select
          name="domain"
          value={form.domain}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        >
          <option value="">Select Domain</option>
          <option value="Frontend Development">Frontend Development</option>
          <option value="Backend Development">Backend Development</option>
          <option value="Fullstack Development">Fullstack Development</option>
          <option value="Data Analysis">Data Analysis</option>
          <option value="Product Analysis">Product Analysis</option>
          <option value="Data Science">Data Science</option>
          <option value="Business Analysis">Business Analysis</option>
          <option value="Machine Learning">Machine Learning</option>
          <option value="Android Developer">Android Developer</option>
          <option value="Other">Other</option>
        </select>
        <select
          name="experience"
          value={form.experience}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        >
          <option value="">Select Experience</option>
          <option value="0-1">0 - 1 year</option>
          <option value="1-2">1 - 2 years</option>
          <option value="2-4">2 - 4 years</option>
          <option value="5+">5+ years</option>
        </select>
        <textarea
          name="bio"
          placeholder="Short Bio"
          value={form.bio}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          rows={3}
          required
        ></textarea>
        <input
          type="url"
          name="resume_link"
          placeholder="Resume Link (Google Drive)"
          value={form.resume_link}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white p-2 rounded hover:bg-indigo-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
