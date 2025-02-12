import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>

      <p className="mb-4">
        Welcome to <strong>Coder Community</strong>. Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your data while using our platform.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">1. Information We Collect</h2>
      <ul className="list-disc ml-6 mb-4">
        <li><strong>Personal Information:</strong> When you sign up, we collect your name, email, and profile details.</li>
        <li><strong>Content Data:</strong> Posts, comments, likes, and interactions made on the platform.</li>
        <li><strong>Usage Data:</strong> We track login activities, device information, and browsing behavior for service improvements.</li>
        <li><strong>Payment Data:</strong> If you subscribe to premium services, payment details are processed securely via third-party providers.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">2. How We Use Your Information</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>To provide and enhance our platform features.</li>
        <li>To ensure user security and prevent fraudulent activities.</li>
        <li>To send important updates, notifications, or promotional content (you can opt out anytime).</li>
        <li>To analyze platform performance and improve user experience.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">3. Data Sharing & Third Parties</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>We <strong>do not</strong> sell your data to third parties.</li>
        <li>We may share data with trusted partners for analytics, security, and platform enhancements.</li>
        <li>Legal authorities may receive data if required by law or for security reasons.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">4. Data Security</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>We use encryption and secure servers to protect user data.</li>
        <li>We encourage users to enable two-factor authentication (2FA) for added security.</li>
        <li>Despite security measures, no platform is 100% secure; users should be cautious while sharing personal data.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">5. Cookies & Tracking</h2>
      <p className="mb-4">
        We use cookies to enhance user experience. You can control cookie preferences in your browser settings.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">6. Your Rights & Choices</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>You can update or delete your account at any time.</li>
        <li>You can opt out of marketing emails by adjusting notification settings.</li>
        <li>You can request a copy of your stored data or ask for its removal.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">7. Changes to Privacy Policy</h2>
      <p className="mb-4">
        We may update this Privacy Policy. Continued use of our platform means you accept any modifications.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">8. Contact Us</h2>
      <p className="mb-4">
        If you have any concerns or questions about your data privacy, contact us at:
      </p>
      <p className="mb-4">
        <strong>Email:</strong> <a href="mailto:support@codercommunity.world" className="text-blue-500 underline">support@codercommunity.world</a>
      </p>

      <p className="mt-6">Thank you for being a part of <strong>Coder Community</strong>!</p>
    </div>
  );
};

export default PrivacyPolicy;
