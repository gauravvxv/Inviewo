export default function TermsPage() {
  return (
    <div className="min-h-screen bg-blue-50 py-16 px-4">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-md border border-blue-100">
        <a href="/">
        <button className="mb-4 text-black underline hover:text-indigo-800">
          ← Back to Home
        </button>
      </a>
        <h1 className="text-4xl font-extrabold text-blue-800 mb-6">
          Terms and Conditions
        </h1>

        <p className="text-gray-700 mb-4">
          Welcome to <strong>Inviewo</strong>. These terms and conditions outline the rules and regulations for the use of our website.
        </p>

        <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">1. Acceptance of Terms</h2>
        <p className="text-gray-700 mb-4">
          By accessing this website, you agree to be bound by these Terms and Conditions. If you disagree with any part, please do not use our service.
        </p>

        <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">2. Services</h2>
        <p className="text-gray-700 mb-4">
          We provide educational sessions and consultation services. You agree to use our services ethically and responsibly.
        </p>

        <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">3. Intellectual Property</h2>
        <p className="text-gray-700 mb-4">
          All content on this website, including text, graphics, logos, and images, is the property of Inviewo and protected by copyright laws.
        </p>

        <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">4. Changes to Terms</h2>
        <p className="text-gray-700 mb-4">
          We may revise these Terms at any time without notice. Please check this page regularly to stay updated.
        </p>

        <p className="text-sm text-gray-500 mt-10">Last updated: June 2, 2025</p>
      </div>
    </div>
  );
}
