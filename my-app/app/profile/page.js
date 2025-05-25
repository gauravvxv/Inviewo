'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function ProfileP() {
  const router = useRouter();
  const [form, setForm] = useState({
    name: 'Gaurav',
    email: 'gaurav@gmail.com',
    domain: 'Data analysis',
    bio: 'Good',
    resume: 'resume link',
  });

  const [isEditing, setIsEditing] = useState(false);

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

  const handleProceed = () => {
    router.push('/payment');
  };

  return (
    <div className="max-w-xl mx-auto p-8 bg-white rounded shadow mt-10">
        <a href='/'>
            <button
        className="mb-4 text-black underline hover:text-indigo-800"
      >
        ← Back to Home
      </button>
        </a>
      <h2 className="text-2xl font-bold mb-4">Your Interview Profile</h2>
      <div className="space-y-4">
        {['name', 'email', 'domain', 'bio', 'resume'].map((field) => (
          <div key={field}>
            <label className="block font-medium capitalize mb-1">{field}</label>
            <input
              type="text"
              name={field}
              value={form[field]}
              onChange={handleChange}
              disabled={!isEditing}
              className={`w-full p-2 border rounded ${
                !isEditing ? 'bg-gray-100 cursor-not-allowed' : ''
              }`}
            />
          </div>
        ))}
      </div>

      <div className="flex gap-4 mt-6">
        {!isEditing ? (
          <button
            onClick={() => setIsEditing(true)}
            className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
          >
            Edit
          </button>
        ) : (
          <button
            onClick={handleSave}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Save
          </button>
        )}

        <button
          onClick={handleProceed}
          className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
        >
          Proceed to Payment
        </button>
      </div>
    </div>
  );
}
