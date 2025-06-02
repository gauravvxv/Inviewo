export default function Shipping() {
  return (
    <div className="min-h-screen bg-blue-50 py-16 px-4">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-md border border-blue-100">
        <a href="/">
        <button className="mb-4 text-black underline hover:text-indigo-800">
          ← Back to Home
        </button>
      </a>
        <h1 className="text-4xl font-bold text-blue-800 mb-4">Shipping & Delivery Policy</h1>
        <p className="text-gray-500 mb-8">Last updated: June 1, 2025</p>

        <p className="text-gray-700 mb-6">
          <strong>Inviewo</strong> offers digital services only. We do not ship any physical products.
        </p>

        <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-3">1. Service Delivery</h2>
        <p className="text-gray-700 mb-6">
          Upon successful payment, your booked session or content will be delivered via email or dashboard access within 24 hours.
        </p>

        <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-3">2. No Physical Delivery</h2>
        <p className="text-gray-700 mb-6">
          As we provide only online services, there are no shipping or delivery charges applicable.
        </p>

        <p className="text-gray-700">
          Need help? Contact us at{" "}
          <a href="mailto:support@inviewo.com" className="text-blue-600 underline">
            support@inviewo.com
          </a>
        </p>
      </div>
    </div>
  );
}
