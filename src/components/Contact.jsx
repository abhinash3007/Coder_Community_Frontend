import React from 'react'

const Contact = () => {
  return (
    <div className="container max-w-7xl mt-10 mx-auto p-12 md:p-24 lg:p-36 bg-base-300 rounded-lg shadow-lg">
      <div className="flex flex-col justify-center mb-12">
        <h1 className="text-5xl font-bold mb-8 text-center">Contact Us</h1>
        <p className="text-xl leading-relaxed text-center mb-12">
          Have questions or need support? Reach out to us, and we'll be happy to assist you.
        </p>
      </div>
      <div className="flex flex-col justify-center mb-12">
        <h2 className="text-4xl font-semibold mb-4 text-center">Get in Touch</h2>
        <div className="bg-base-100 p-6 rounded-lg mb-4 mx-auto w-full md:w-4/5 lg:w-3/4 xl:w-2/3">
          <p className="text-2xl leading-relaxed mb-4">
            <strong>Email:</strong> <a href="mailto:support@codercommunity.world" className="text-blue-500 underline">support@codercommunity.world</a>
          </p>
          <p className="text-xl leading-relaxed mb-4">
            Our support team is available to help you with any questions or concerns you may have. 
            Please don't hesitate to reach out to us.
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center mb-12">
        <h2 className="text-4xl font-semibold mb-4 text-center">Send Us a Message</h2>
        <form className="bg-base-100 p-6 rounded-lg mb-4 mx-auto w-full md:w-4/5 lg:w-3/4 xl:w-2/3">
          <label className="block mb-2 font-semibold text-2xl">Your Name</label>
          <input type="text" className="w-full p-2 border rounded mb-4" placeholder="Enter your name" required />
          <label className="block mb-2 font-semibold text-2xl">Your Email</label>
          <input type="email" className="w-full p-2 border rounded mb-4" placeholder="Enter your email" required />
          <label className="block mb-2 font-semibold text-2xl">Message</label>
          <textarea className="w-full p-2 border rounded mb-4" rows="4" placeholder="Write your message" required></textarea>
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Send Message
          </button>
        </form>
      </div>
      <p className="text-2xl leading-relaxed text-center mt-12">Thank you for being a part of <strong>Coder Community</strong>!</p>
    </div>
  )
}

export default Contact
