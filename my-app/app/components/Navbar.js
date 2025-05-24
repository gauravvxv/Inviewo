'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-indigo-700">
          InterviewPro
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8 text-gray-700 font-medium">
          <a href="#how-it-works" className="hover:text-indigo-600">How It Works</a>
          <a href="#why-us" className="hover:text-indigo-600">Why Us</a>
          <a href="#categories" className="hover:text-indigo-600">Categories</a>
          <a href="#testimonials" className="hover:text-indigo-600">Testimonials</a>
            <a href="/signup">
        <button className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition">
          Sign In
          </button>
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 focus:outline-none">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-inner px-4 pb-4">
          <a href="#how-it-works" className="block py-2 text-gray-700 hover:text-indigo-600">How It Works</a>
          <a href="#why-us" className="block py-2 text-gray-700 hover:text-indigo-600">Why Us</a>
          <a href="#categories" className="block py-2 text-gray-700 hover:text-indigo-600">Categories</a>
          <a href="#testimonials" className="block py-2 text-gray-700 hover:text-indigo-600">Testimonials</a>
            <a href="/signup">
        <button className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition">
          Sign In
          </button>
          </a>
        </div>
      )}
    </header>
  );
}




    // <a href="/signup">
    //     <button className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition">
    //       Sign In
    //       </button>
    //       </a>
      