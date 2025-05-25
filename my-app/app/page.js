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
          InterviewPro connects you with top industry professionals to help you ace your job interviews, improve your resume, and gain confidence.
        </motion.p>

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
        <h2 className="text-3xl font-semibold mb-10 text-indigo-700">Why Choose InterviewPro?</h2>
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
                className="bg-indigo-100 text-indigo-800 px-5 py-2 rounded-full shadow-md hover:bg-indigo-200 cursor-pointer"
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
          “With InterviewPro, I cracked interviews at Microsoft and got my dream job!”
        </motion.blockquote>
        <p className="font-semibold text-indigo-800">— Anjali, Software Engineer</p>
      </section>

      {/* Pricing Section */}
      <section id="price" className="bg-white py-16 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-10 text-indigo-700">Simple Pricing</h2>
        <div className="flex flex-col md:flex-row gap-8 justify-center">
          {[
            {
              title: "Starter",
              price: "$29",
              features: ["1 Mock Interview", "Basic Feedback", "Email Support"],
            },
            {
              title: "Pro",
              price: "$79",
              features: ["3 Sessions", "Detailed Feedback", "Priority Scheduling"],
            },
            {
              title: "Elite",
              price: "$149",
              features: ["5 Sessions", "1 Resume Review", "1:1 Career Coaching"],
            },
          ].map((plan) => (
            <div key={plan.title} className="bg-indigo-100 p-6 rounded-xl shadow-md w-80">
              <h3 className="text-2xl font-semibold text-indigo-800 mb-2">{plan.title}</h3>
              <p className="text-3xl font-bold text-indigo-900 mb-4">{plan.price}</p>
              <ul className="text-left space-y-2">
                {plan.features.map((f) => (
                  <li key={f}>✅ {f}</li>
                ))}
              </ul>
              <button className="mt-6 bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition">
                Choose Plan
              </button>
            </div>
          ))}
        </div>
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
