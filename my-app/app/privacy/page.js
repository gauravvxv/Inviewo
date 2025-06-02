export default function Privacy() {
  return (
    <div className="min-h-screen bg-blue-50 py-16 px-4">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-md border border-blue-100">
        <a href="/">
        <button className="mb-4 text-black underline hover:text-indigo-800">
          ← Back to Home
        </button>
      </a>
        <h1 className="text-4xl font-bold text-blue-800 mb-4">Privacy Policy</h1>
        <p className="text-gray-500 mb-8">Last updated: June 1, 2025</p>

        <p className="text-gray-700 mb-6">
          We at <strong>Inviewo</strong> value your privacy and are committed to protecting your personal data.
        </p>

        <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-3">1. Information We Collect</h2>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li>Your name, email, and contact details</li>
          <li>Booking and transaction data</li>
          <li>Usage data and cookies</li>
        </ul>

        <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-3">2. How We Use Your Data</h2>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li>To process bookings and payments</li>
          <li>To improve user experience</li>
          <li>To communicate updates or offers</li>
        </ul>

        <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-3">3. Third-Party Services</h2>
        <p className="text-gray-700 mb-6">
          We use Razorpay for secure payments and Google services for analytics. They may collect data as per their respective privacy policies.
        </p>

        <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-3">4. Your Rights</h2>
        <p className="text-gray-700 mb-6">
          You may request access, modification, or deletion of your data by emailing us.
        </p>

        <p className="text-gray-700">
          Contact:{" "}
          <a href="mailto:privacy@inviewo.com" className="text-blue-600 underline">
            privacy@inviewo.com
          </a>
        </p>
      </div>
    </div>
  );
}
