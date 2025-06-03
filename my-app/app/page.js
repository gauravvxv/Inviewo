'use client';

import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function HomePage() {

  const logos = [
  "/logo/google.webp",
  "/logo/meta.png",
  "/logo/amazon.jpg",
  "/logo/microsoft.webp",
  "/logo/apple.png",
  "/logo/netflix.jpg",
  "/logo/adobe.png"
];


  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-100 text-gray-900">
      <Navbar />

      {/* Hero Section */}
      <section className="py-20 px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold mb-4 text-indigo-800"
        >
          Empower Your Career with Mock Interviews
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-xl max-w-2xl mx-auto mb-6"
        >
          Inviewo connects you with top industry professionals to help you ace your job interviews, improve your resume, and gain confidence.
        </motion.p>
<motion.h1
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.3 }}
  className="text-xl max-w-2xl mx-auto mb-6 font-medium text-gray-800"
>
  Confidence isn't forged in the final interview it's built in the practice ones. At <span className="text-indigo-700 font-semibold">Inviewo</span>, we don't just prepare you for questions we prepare you to win.
</motion.h1>


        <a href="/book-session">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-indigo-600 text-white px-8 py-3 rounded-full shadow-lg hover:bg-indigo-700 transition"
          >
          Book Your First Session
        </motion.button>
          </a>
      </section>

      {/* Features Section */}
      <section id="why-us" className="py-16 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-10 text-indigo-700">Why Choose Inviewo?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Expert Interviewers",
              desc: "Our experts come from top companies like Google, Amazon, and Meta.",
            },
            {
              title: "Real-Time Feedback",
              desc: "Receive actionable feedback that helps you improve immediately.",
            },
            {
              title: "Customized Sessions",
              desc: "Practice for specific roles with tailored interview questions.",
            },
          ].map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              className="bg-white p-6 rounded-xl shadow-xl"
            >
              <h3 className="text-xl font-semibold mb-2 text-indigo-800">{feature.title}</h3>
              <p>{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Expert Categories */}
      <section id="categories" className="bg-purple-50 py-16 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-10 text-purple-700">Expertise Across Domains</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {["Software Engineering", "Android Developer", "Finance", "Product Analysis","Data Analysis", "Data Science"].map(
            (cat, i) => (
              <motion.span
                key={cat}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="bg-indigo-100 text-indigo-800 px-5 py-2 rounded-full shadow-md hover:bg-indigo-200"
              >
                {cat}
              </motion.span>
            )
          )}
        </div>
      </section>

      {/* Top comapanies */}

<section className="bg-white py-12 overflow-hidden">
  <h2 className="text-2xl text-center font-semibold text-indigo-700 mb-6">
    Trusted by Professionals from Top Companies
  </h2>
  <div className="relative w-full overflow-hidden">
    <div className="flex animate-scroll whitespace-nowrap gap-10 px-6">
      {[...logos, ...logos,...logos].map((src, i) => (
        <img
          key={i}
          src={src}
          alt={`${i}`}
          className="h-12 w-auto transition duration-300"
        />
      ))}
    </div>
  </div>
</section>


      {/* Success Stories */}
      <section id="testimonials" className="py-16 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-10 text-indigo-700">Success Stories</h2>
        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-lg italic mb-4"
        >
          “With Inviewo, I cracked interviews at Microsoft and got my dream job!”
        </motion.blockquote>
        <p className="font-semibold text-indigo-800">— Anjali, Software Engineer</p>
      </section>

{/* Pricing Section */}
<section id="prices" className="py-24 px-6 bg-gradient-to-br from-white to-purple-50 text-center">
  <h2 className="text-4xl font-bold text-indigo-700 mb-6">Simple, Transparent Pricing</h2>
  <p className="text-lg max-w-3xl mx-auto text-gray-700 mb-14">
    We believe in making career growth accessible. That’s why our pricing is not just affordable — it’s built to give you <strong>maximum value</strong> with <strong>minimum investment</strong>.
  </p>

  {/* Pricing Cards Container */}
  <div className="flex flex-col md:flex-row justify-center items-stretch gap-6 max-w-6xl mx-auto mb-20 px-4">

    {/* 1 Mock Interview */}
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="flex-1 bg-white shadow-2xl rounded-2xl p-6 border border-indigo-100"
    >
      <h3 className="text-2xl font-bold text-indigo-800 mb-2">1 Mock Interview</h3>
      <p className="text-5xl font-extrabold text-indigo-600 mb-1">₹199</p>
      <p className="text-gray-400 line-through mb-1">₹399</p>
      <p className="text-green-600 font-semibold mb-4">Save 50%</p>
      <ul className="text-left text-gray-700 mb-6 space-y-3 text-base">
        <li>✅ One-on-One Expert Interview</li>
        <li>✅ Personalized Feedback</li>
        <li>✅ Real Industry Questions</li>
        <li>✅ Confidence Boost Before the Real Thing</li>
      </ul>
    </motion.div>

    {/* Monthly Plan */}
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="flex-1 bg-white shadow-2xl rounded-2xl p-6 border border-indigo-100"
    >
      <h3 className="text-2xl font-bold text-indigo-800 mb-2">Monthly Plan</h3>
      <p className="text-5xl font-extrabold text-indigo-600 mb-1">₹1000</p>
      <p className="text-gray-400 line-through mb-1">₹3500</p>
      <p className="text-green-600 font-semibold mb-4">Save 71%</p>
      <ul className="text-left text-gray-700 mb-6 space-y-3 text-base">
        <li>✅ 4 Expert Mock Interviews per Month</li>
        <li>✅ Extra Bonus Call if Requested</li>
        <li>✅ Industry-Specific Practice</li>
        <li>✅ Personalized Feedback</li>
      </ul>
    </motion.div>

    {/* Yearly Plan */}
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="flex-1 bg-indigo-50 shadow-2xl rounded-2xl p-6 border border-indigo-200"
    >
      <h3 className="text-2xl font-bold text-indigo-800 mb-2">Yearly Plan</h3>
      <p className="text-5xl font-extrabold text-indigo-600 mb-1">₹700</p>
      <p className="text-gray-400 line-through mb-1">₹3500</p>
      <p className="text-green-600 font-semibold mb-4">Save 80%</p>
      <ul className="text-left text-gray-700 mb-6 space-y-3 text-base">
        <li>✅ One-Time Payment for Full Year</li>
        <li>✅ 4 Sessions per Month (48 Total)</li>
        <li>✅ Free Bonus Call Anytime</li>
        <li>✅ Higher Savings, Zero Hassle</li>
      </ul>
    </motion.div>
  </div>

  {/* Why Inviewo Section */}
  <motion.div
    whileInView={{ opacity: 1, y: 0 }}
    initial={{ opacity: 0, y: 30 }}
    transition={{ duration: 0.6 }}
    className="relative max-w-4xl mx-auto bg-gradient-to-br from-white via-purple-50 to-white rounded-2xl shadow-xl p-10 text-left text-gray-800 mt-10"
  >
    <div className="absolute -top-5 left-6 text-indigo-600 text-4xl font-bold opacity-20">
      “
    </div>
    <p className="mb-6 text-lg leading-relaxed">
      <strong className="text-indigo-700">Most coaching platforms charge ₹3500 or more per month</strong> — and they rarely offer personalized 1:1 feedback or flexible scheduling that adapts to your job goals.
    </p>
    <p className="mb-6 text-lg leading-relaxed">
      <strong className="text-purple-700">At Inviewo,</strong> we’ve created a platform where students and professionals from all backgrounds can experience real-world mock interviews, get expert feedback, and build true confidence — without spending a fortune.
    </p>
    <p className="text-xl font-semibold text-indigo-800 italic border-l-4 pl-4 border-indigo-400">
      You're not just paying for sessions — you're investing in your career growth.
    </p>
  </motion.div>
</section>



      {/* Call to Action */}
      <section className="bg-indigo-600 py-20 text-center text-white">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-4"
        >
          Ready to Land Your Dream Job?
        </motion.h2>
        <a href="/book-session">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-indigo-600 px-8 py-3 mt-4 rounded-full shadow hover:bg-gray-100 transition"
          >
          Get Started Now
        </motion.button>
          </a>
      </section>

      <Footer />
    </div>
  );
}
