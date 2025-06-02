export default function Contact() {
  return (
    <div className="min-h-screen bg-blue-50 py-16 px-4">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-md border border-blue-100">
        <a href="/">
        <button className="mb-4 text-black underline hover:text-indigo-800">
          ← Back to Home
        </button>
      </a>
        <h1 className="text-4xl font-bold text-blue-800 mb-4">Contact Us</h1>

        <p className="text-gray-700 mb-6">
          We’re happy to help! Reach out to us using the information below:
        </p>

        <ul className="text-gray-800 space-y-4">
          <li>
            <strong>Email:</strong>{' '}
            <a href="mailto:hr@inviewo.com" className="text-blue-600 underline">
              hr@inviewo.com
            </a>
          </li>
          <li>
            <strong>Business Hours:</strong> Monday – Saturday, 10:00 AM – 6:00 PM IST
          </li>
          <li>
            <strong>Website:</strong>{' '}
            <a href="https://inviewo.com" className="text-blue-600 underline">
              https://inviewo.com
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
