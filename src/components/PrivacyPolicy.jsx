import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="container max-w-7xl mt-10 mx-auto p-12 md:p-24 lg:p-36 bg-base-300 rounded-lg shadow-lg">
      <div className="flex flex-col justify-center mb-12">
        <h1 className="text-5xl font-bold mb-8 text-center">Privacy Policy</h1>
        <p className="text-xl leading-relaxed text-center mb-12">
          Welcome to <strong>Coder Community</strong>. Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your data while using our platform.
        </p>
      </div>

      <div className="flex flex-col mb-12">
        <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
        <div className="bg-base-100 p-6 rounded-lg mb-4 mx-auto w-full md:w-4/5 lg:w-3/4 xl:w-2/3">
          <ul className="list-disc ml-6 mb-4">
            <li className="text-xl leading-relaxed mb-2">
              <strong>Personal Information:</strong> When you sign up, we collect your name, email, and profile details.
            </li>
            <li className="text-xl leading-relaxed mb-2">
              <strong>Content Data:</strong> Posts, comments, likes, and interactions made on the platform.
            </li>
            <li className="text-xl leading-relaxed mb-2">
              <strong>Usage Data:</strong> We track login activities, device information, and browsing behavior for service improvements.
            </li>
            <li className="text-xl leading-relaxed mb-2">
              <strong>Payment Data:</strong> If you subscribe to premium services, payment details are processed securely via third-party providers.
            </li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col mb-12">
        <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
        <div className="bg-base-100 p-6 rounded-lg mb-4 mx-auto w-full md:w-4/5 lg:w-3/4 xl:w-2/3">
          <ul className="list-disc ml-6 mb-4">
            <li className="text-xl leading-relaxed mb-2">To provide and enhance our platform features.</li>
            <li className="text-xl leading-relaxed mb-2">To ensure user security and prevent fraudulent activities.</li>
            <li className="text-xl leading-relaxed mb-2">To send important updates, notifications, or promotional content (you can opt out anytime).</li>
            <li className="text-xl leading-relaxed mb-2">To analyze platform performance and improve user experience.</li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col mb-12">
        <h2 className="text-2xl font-semibold mb-4">3. Data Sharing & Third Parties</h2>
        <div className="bg-base-100 p-6 rounded-lg mb-4 mx-auto w-full md:w-4/5 lg:w-3/4 xl:w-2/3">
          <ul className="list-disc ml-6 mb-4">
            <li className="text-xl leading-relaxed mb-2">We <strong>do not</strong> sell your data to third parties.</li>
            <li className="text-xl leading-relaxed mb-2">We may share data with trusted partners for analytics, security, and platform enhancements.</li>
            <li className="text-xl leading-relaxed mb-2">Legal authorities may receive data if required by law or for security reasons.</li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col mb-12">
        <h2 className="text-2xl font-semibold mb-4">4. Data Security</h2>
        <div className="bg-base-100 p-6 rounded-lg mb-4 mx-auto w-full md:w-4/5 lg:w-3/4 xl:w-2/3">
          <ul className="list-disc ml-6 mb-4">
            <li className="text-xl leading-relaxed mb-2">We use encryption and secure servers to protect user data.</li>
            <li className="text-xl leading-relaxed mb-2">We encourage users to enable two-factor authentication (2FA) for added security.</li>
            <li className="text-xl leading-relaxed mb-2">Despite security measures, no platform is 100% secure; users should be cautious while sharing personal data.</li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col mb-12">
        <h2 className="text-2xl font-semibold mb-4">5. Cookies & Tracking</h2>
        <div className="bg-base-100 p-6 rounded-lg mb-4 mx-auto w-full md:w-4/5 lg:w-3/4 xl:w-2/3">
          <p className="text-xl leading-relaxed mb-4">
            We use cookies to enhance user experience. You can control cookie preferences in your browser settings.
          </p>
        </div>
      </div>

      <div className="flex flex-col mb-12">
        <h2 className="text-2xl font-semibold mb-4">6. Your Rights & Choices</h2>
        <div className="bg-base-100 p-6 rounded-lg mb-4 mx-auto w-full md:w-4/5 lg:w-3/4 xl:w-2/3">
          <ul className="list-disc ml-6 mb-4">
            <li className="text-xl leading-relaxed mb-2">You can update or delete your account at any time.</li>
            <li className="text-xl leading-relaxed mb-2">You can opt out of marketing emails by adjusting notification settings.</li>
            <li className="text-xl leading-relaxed mb-2">You can request a copy of your stored data or ask for its removal.</li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col mb-12">
        <h2 className="text-2xl font-semibold mb-4">7. Changes to Privacy Policy</h2>
        <div className="bg-base-100 p-6 rounded-lg mb-4 mx-auto w-full md:w-4/5 lg:w-3/4 xl:w-2/3">
          <p className="text-xl leading-relaxed mb-4">
            We may update this Privacy Policy. Continued use of our platform means you accept any modifications.
          </p>
        </div>
      </div>

      <div className="flex flex-col mb-12">
        <h2 className="text-2xl font-semibold mb-4">8. Contact Us</h2>
        <div className="bg-base-100 p-6 rounded-lg mb-4 mx-auto w-full md:w-4/5 lg:w-3/4 xl:w-2/3">
          <p className="text-xl leading-relaxed mb-4">
            If you have any concerns or questions about your data privacy, contact us at:
          </p>
          <p className="text-xl leading-relaxed mb-4">
            <strong>Email:</strong> <a href="mailto:support@codercommunity.world" className="text-blue-500 underline">support@codercommunity.world</a>
          </p>
        </div>
      </div>

      <p className="text-xl leading-relaxed text-center mt-12">Thank you for being a part of <strong>Coder Community</strong>!</p>
    </div>
  );
};

export default PrivacyPolicy;
