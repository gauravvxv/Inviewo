export default function Refunds() {
  return (
    <div className="min-h-screen bg-blue-50 py-16 px-4">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-md border border-blue-100">
        <a href="/">
        <button className="mb-4 text-black underline hover:text-indigo-800">
          ← Back to Home
        </button>
      </a>
        <h1 className="text-4xl font-bold text-blue-800 mb-4">Cancellation & Refund Policy</h1>
        <p className="text-gray-500 mb-8">Last updated: June 1, 2025</p>

        <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-3">1. Cancellation</h2>
        <p className="text-gray-700 mb-6">
          Users can cancel a session up to 24 hours in advance. To cancel, email{" "}
          <a href="mailto:hr@inviewo.com" className="text-blue-600 underline">
            hr@inviewo.com
          </a>{" "}
          with your booking ID.
        </p>

        <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-3">2. Refunds</h2>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li>Full refund for cancellations made 24+ hours before the session.</li>
          <li>No refunds for cancellations within 24 hours or missed sessions.</li>
          <li>Refunds will be credited to your original payment method within 5–7 business days.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-3">3. Contact</h2>
        <p className="text-gray-700">
          For refund queries, contact{" "}
          <a href="mailto:hr@inviewo.com" className="text-blue-600 underline">
            hr@inviewo.com
          </a>
        </p>
      </div>
    </div>
  );
}
