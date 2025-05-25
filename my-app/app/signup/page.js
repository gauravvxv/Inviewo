export default function SignupPage() {
  const handleGoogleSignup = () => {
    // Integrate Google Sign-Up logic here
    console.log("Google signup clicked");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-indigo-100 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-purple-700 mb-6">Create an Account</h2>

        <form className="space-y-4">
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Full Name</label>
            <input type="text" className="w-full px-4 py-2 border rounded-xl" placeholder="John Doe" />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Email</label>
            <input type="email" className="w-full px-4 py-2 border rounded-xl" placeholder="you@example.com" />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Password</label>
            <input type="password" className="w-full px-4 py-2 border rounded-xl" placeholder="••••••••" />
          </div>
          <button type="submit" className="w-full bg-purple-600 text-white py-2 rounded-xl hover:bg-purple-700 transition">
            Sign Up
          </button>
        </form>

       

        <p className="mt-4 text-sm text-center text-gray-600">
          Already have an account?{' '}
          <a href="/login" className="text-purple-600 hover:underline">
            Log in
          </a>
        </p>
      </div>
    </div>
  );
}
