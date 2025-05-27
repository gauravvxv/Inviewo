'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import PaymentButton from '../components/PaymentButton'; // Adjust path if needed

export default function ProfileP() {
  const router = useRouter();
  const [form, setForm] = useState({
    name: 'Gaurav',
    email: 'gaurav@gmail.com',
    domain: 'Data analysis',
    experience: '0-1 year',
    bio: 'Good',
    resume: 'resume link',
  });

  const [isEditing, setIsEditing] = useState(false);
  const sessionId = 1; // Ideally fetched from backend or session
  const amount =  10000;  // ₹500 in paise

  useEffect(() => {
    const data = localStorage.getItem('interviewForm');
    if (data) {
      setForm(JSON.parse(data));
    }
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    localStorage.setItem('interviewForm', JSON.stringify(form));
    setIsEditing(false);
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white rounded-xl shadow-lg mt-10">
      <a href='/'>
        <button className="mb-4 text-black underline hover:text-indigo-800">
          ← Back to Home
        </button>
      </a>

      <h2 className="text-3xl font-bold mb-6 text-indigo-700">Your Interview Profile</h2>

      <div className="space-y-5">
        {['name', 'email', 'domain', 'experience', 'bio', 'resume'].map((field) => (
          <div key={field}>
            <label className="block font-semibold capitalize mb-1 text-gray-700">{field}</label>
            <input
              type="text"
              name={field}
              value={form[field]}
              onChange={handleChange}
              disabled={!isEditing}
              className={`w-full p-3 border rounded-lg text-gray-800 ${
                !isEditing ? 'bg-gray-100 cursor-not-allowed' : 'bg-white'
              }`}
            />
          </div>
        ))}
      </div>

      {/* Buttons and Payment Section */}
      <div className="flex items-center gap-6 mt-8">
        {!isEditing ? (
          <button
            onClick={() => setIsEditing(true)}
            className="bg-yellow-500 text-white px-5 py-2 rounded-lg hover:bg-yellow-600"
          >
            Edit
          </button>
        ) : (
          <button
            onClick={handleSave}
            className="bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700"
          >
            Save
          </button>
        )}

        <span className="text-lg font-semibold text-gray-800">Pay ₹ {amount / 100}</span>

        <PaymentButton sessionId={sessionId} amount={amount} />
      </div>
    </div>
  );
}
