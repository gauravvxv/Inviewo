'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function BookSessionPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    domain: '',
    bio: '',
    resume: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('intervieweeDetails', JSON.stringify(form));
    router.push('/profile'); // Redirect to profile page
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
      <h2 className="text-2xl font-bold mb-4">Book Your Session</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="name" placeholder="Your Name" value={form.name} onChange={handleChange} className="w-full p-2 border rounded" required />
        <input type="email" name="email" placeholder="Your Email" value={form.email} onChange={handleChange} className="w-full p-2 border rounded" required />
        <input type="number" name="number" placeholder="Your Phone Number" value={form.phone} onChange={handleChange} className="w-full p-2 border rounded" required />
        <input type="text" name="domain" placeholder="Preferred Domain" value={form.domain} onChange={handleChange} className="w-full p-2 border rounded" required />
        <textarea name="bio" placeholder="Short Bio" value={form.bio} onChange={handleChange} className="w-full p-2 border rounded" rows={3} required></textarea>
        <input type="url" name="resume" placeholder="Resume Link (Google Drive)" value={form.resume} onChange={handleChange} className="w-full p-2 border rounded" required />
        <button type="submit" className="w-full bg-indigo-600 text-white p-2 rounded hover:bg-indigo-700">Submit</button>
      </form>
    </div>
  );
}
