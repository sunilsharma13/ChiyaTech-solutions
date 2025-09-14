'use client';
import { useState } from 'react';

export default function RegisterInterest() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setShowPopup(false);

    try {
      const query = new URLSearchParams(formData).toString();
      const url = `https://script.google.com/macros/s/AKfycbxapI4GzxbSSrZugOnE8kexoxqC5h_IDv8tPU-sqKAo4BNGtC9ef9p6cr1ftUIZJ8W2gg/exec?${query}`;

      const res = await fetch(url);
      const result = await res.json();

      if (result.status === 'success') {
        setShowPopup(true);
        setFormData({ name: '', email: '', company: '', message: '' });
      } else {
        alert('Something went wrong.');
      }
    } catch (err) {
      console.error('Fetch error:', err);
      alert('Server error.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="register"
      className="relative bg-[#0f0f0f] text-white py-32 px-4 sm:px-6"
      style={{
        backgroundImage: "url('/register-bg.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black/50 z-0" />

      <div className="relative z-10 flex justify-center">
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left Illustration */}
          <div className="hidden md:block min-h-[500px] flex items-center justify-center">
            <img
              src="/Chiyatech.jpeg"
              alt="Illustration"
              className="w-full h-auto object-contain max-w-md"
            />
          </div>

          {/* Right Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-gradient-to-br from-[#0a1f3d] to-[#001f4d] text-white rounded-xl p-8 shadow-xl w-full border border-blue-500"
          >
            <h2 className="text-2xl font-semibold mb-6">Tell Us What You Need</h2>

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full mb-4 px-4 py-2 rounded bg-[#0f1f3f] border border-blue-700 placeholder:text-blue-300"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full mb-4 px-4 py-2 rounded bg-[#0f1f3f] border border-blue-700 placeholder:text-blue-300"
            />
            <input
              type="text"
              name="company"
              placeholder="Company / Brand"
              value={formData.company}
              onChange={handleChange}
              className="w-full mb-4 px-4 py-2 rounded bg-[#0f1f3f] border border-blue-700 placeholder:text-blue-300"
            />
            <textarea
              name="message"
              placeholder="Tell us what you're looking for..."
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full mb-6 px-4 py-2 rounded bg-[#0f1f3f] border border-blue-700 placeholder:text-blue-300 resize-none"
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className={`bg-blue-600 text-white px-6 py-2 rounded transition ${
                isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'
              }`}
            >
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
          </form>
        </div>
      </div>

      {/* Popup */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/70">
          <div className="bg-[#0a1f3d] text-white p-6 rounded-xl shadow-xl border border-blue-500 max-w-sm text-center">
            <h3 className="text-xl font-semibold mb-2">Thanks for reaching out!</h3>
            <p className="text-sm text-blue-200">
              We'll get back to you shortly and help bring your vision to life.
            </p>
            <button
              onClick={() => setShowPopup(false)}
              className="mt-4 px-4 py-2 bg-blue-600 rounded hover:bg-blue-700 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
