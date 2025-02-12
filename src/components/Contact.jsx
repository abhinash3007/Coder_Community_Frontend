import React from 'react'

const Contact = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p className="mb-4">
        Have questions or need support? Reach out to us, and we'll be happy to assist you.
      </p>

        <p><strong>Email:</strong> <a href="mailto:support@codercommunity.world" className="text-blue-500">support@codercommunity.world</a></p>
        

      {/* Contact Form */}
      <form className="bg-gray-700 p-4 rounded-lg mt-5">
        <label className="block mb-2 font-semibold">Your Name</label>
        <input type="text" className="w-full p-2 border rounded mb-4" placeholder="Enter your name" required />

        <label className="block mb-2 font-semibold">Your Email</label>
        <input type="email" className="w-full p-2 border rounded mb-4" placeholder="Enter your email" required />

        <label className="block mb-2 font-semibold">Message</label>
        <textarea className="w-full p-2 border rounded mb-4" rows="4" placeholder="Write your message" required></textarea>

        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Send Message
        </button>
      </form>
    </div>
  )
}

export default Contact
