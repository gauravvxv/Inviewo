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

  const [loading, setLoading] = useState(false); // Loading state

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading

    const payload = { ...form };

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
    } finally {
      setLoading(false); // Stop loading after success or error
    }
  };

  return (
    <div className="max-w-7xl mx-auto mt-10 px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-3 gap-10">
        {/* Main Form */}
        <div className="md:col-span-2 bg-white p-8 shadow-lg rounded-xl">
          <a href="/" className="text-black underline hover:text-indigo-800 mb-4 block">
            ← Back to Home
          </a>

          <h2 className="text-3xl font-bold text-indigo-700 mb-6">Book Your Mock Interview</h2>
          <p className="mb-6 text-gray-600">Fill out your details below to schedule a mock interview with an expert mentor.</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className="w-full p-3 border rounded"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              className="w-full p-3 border rounded"
              required
            />
            <input
              type="text"
              name="phone_number"
              placeholder="Your Phone Number"
              value={form.phone_number}
              onChange={(e) => {
                const value = e.target.value;
                if (/^\d{0,10}$/.test(value)) handleChange(e);
              }}
              maxLength={10}
              className="w-full p-3 border rounded"
              required
            />
            <select
              name="domain"
              value={form.domain}
              onChange={handleChange}
              className="w-full p-3 border rounded"
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
              className="w-full p-3 border rounded"
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
              className="w-full p-3 border rounded"
              rows={3}
              required
            />
            <input
              type="url"
              name="resume_link"
              placeholder="Resume Link (Google Drive)"
              value={form.resume_link}
              onChange={handleChange}
              className="w-full p-3 border rounded"
              required
            />
            <button
              type="submit"
              className={`w-full p-3 rounded text-white ${loading ? 'bg-indigo-400 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700'}`}
              disabled={loading}
            >
              {loading ? (
                <div className="flex items-center justify-center space-x-2">
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                    ></path>
                  </svg>
                  <span>Submitting...</span>
                </div>
              ) : (
                'Submit and Proceed'
              )}
            </button>
          </form>
        </div>

        {/* Advertisement Section */}
        <div className="bg-gradient-to-br from-indigo-50 to-white p-6 shadow-md rounded-xl text-center">
          <h3 className="text-2xl font-bold text-indigo-700 mb-4">🚀 Ace Your Next Interview with Inviewo!</h3>
          <p className="mb-4 text-gray-600">
            Book your first mock interview with industry experts and get personalized feedback that boosts your confidence and interview skills.
          </p>

          <img
            src="/logo/inviewo banner.png"
            alt="Inviewo Promo"
            className="rounded-lg shadow mb-4"
          />

          <div className="bg-green-100 text-green-800 p-3 rounded mb-4 font-semibold">
            🎯 Boost Your Interview Skills with Expert Guidance!
          </div>

          <p className="text-sm text-gray-600 italic mb-6">
            Join hundreds of successful candidates who aced their interviews with Inviewo’s personalized mock sessions.
          </p>

          <div className="text-left text-gray-700">
            <h4 className="font-semibold mb-2">Why Inviewo?</h4>
            <ul className="list-disc ml-5 space-y-1">
              <li>1-on-1 mock interviews with professionals</li>
              <li>Domain-specific mentors from top companies</li>
              <li>Actionable, personalized feedback</li>
              <li>Resume + LinkedIn review by experts</li>
              <li>Boost your confidence before real interviews</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
