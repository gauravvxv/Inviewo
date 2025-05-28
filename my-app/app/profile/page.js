'use client';
import { useEffect, useState } from 'react';
import PaymentButton from '../components/PaymentButton'; // Adjust path if needed

export default function ProfileP() {
  const [form, setForm] = useState({
     name: '',
    email: '',
    phone_number: '',
    domain: '',
    experience: '',
    bio: '',
    resume_link: ''
  });

  const [isEditing, setIsEditing] = useState(false);
  const [session_id,setSession_id] = useState(null)
  const amount =  10000;

   useEffect(() => {
    const session = localStorage.getItem('intervieweeDetails');
     console.log('intervieweeDetails from localStorage:', session);
    if (session) {
        setSession_id(session);
        fetchBookingData(session);
    }
  }, []);

  // Fetch booking data using session_id
  const fetchBookingData = async (session) => {
    try {
      const res = await fetch(`https://inviewo-pgback.onrender.com/api/booking/${session}`);
      if (!res.ok) {
        throw new Error('Failed to fetch booking data');
      }
      const data = await res.json();
      setForm({
        name: data.name || '',
        email: data.email || '',
        phone_number: data.phone_number || '',
        domain: data.domain || '',
        experience: data.experience || '',
        bio: data.bio || '',
        resume_link: data.resume_link || '',
      });
      console.log(data)
    } catch (error) {
      console.error('Error fetching booking:', error);
    }
  };
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    if (!session_id) {
      console.error('No session_id found to update booking');
      return;
    }
    try {
      const res = await fetch(`https://inviewo-pgback.onrender.com/api/booking/${session_id}`, {
        method: 'PUT', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        throw new Error('Failed to update booking data');
      }
      const data = await res.json();
      console.log('Booking updated:', data);
      setIsEditing(false);
    } catch (error) {
      console.error('Error updating booking:', error);
    }
  };

    const fields = [
    { key: 'name', label: 'Name' },
    { key: 'email', label: 'Email' },
    { key: 'phone_number', label: 'Phone Number' },
    { key: 'domain', label: 'Domain' },
    { key: 'experience', label: 'Experience' },
    { key: 'bio', label: 'Bio' },
    { key: 'resume_link', label: 'Resume Link' },
  ];


  return (
    <div className="max-w-4xl mx-auto p-8 bg-white rounded-xl shadow-lg mt-10">
      <a href='/'>
        <button className="mb-4 text-black underline hover:text-indigo-800">
          ← Back to Home
        </button>
      </a>

      <h2 className="text-3xl font-bold mb-6 text-indigo-700">Your Interview Profile</h2>

       <div className="space-y-5">
        {fields.map(({ key, label }) => (
          <div key={key}>
            <label className="block font-semibold capitalize mb-1 text-gray-700">{label}</label>
            <input
              type="text"
              name={key}
              value={form[key]}
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

        <PaymentButton sessionId={session_id} amount={amount} />
      </div>
    </div>
  );
}
