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

        <div className="mt-4 flex items-center gap-2">
          <hr className="flex-1 border-gray-300" />
          <span className="text-gray-500 text-sm">OR</span>
          <hr className="flex-1 border-gray-300" />
        </div>

        <button
          className="mt-4 w-full flex items-center justify-center gap-3 border px-4 py-2 rounded-xl hover:bg-gray-50 transition"
        >
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png" alt="Google" className="w-5 h-5" />
          <span className="text-sm text-gray-700 font-medium">Sign up with Google</span>
        </button>

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
