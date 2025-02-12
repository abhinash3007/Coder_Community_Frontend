import React from "react";

const TermsOfService = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Terms of Service</h1>

      <p className="mb-4">
        Welcome to <strong>Coder Community</strong>, a platform for developers to connect, share knowledge, and collaborate. 
        By accessing or using our platform, you agree to abide by these terms.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">1. Account Registration</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>Users must provide accurate and up-to-date information during registration.</li>
        <li>You are responsible for maintaining the security of your account and password.</li>
        <li>Any suspicious activity should be talerated as this website is for people of all ages.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">2. Community Guidelines</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>Respect all members of the community—harassment, hate speech, and discrimination are strictly prohibited.</li>
        <li>Do not post spam, self-promotion, or misleading content.</li>
        <li>Content shared must be relevant to programming, development, and tech-related discussions.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">3. User Content</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>Users retain ownership of the content they post but grant us a license to display and distribute it.</li>
        <li>Offensive, copyrighted, or illegal content will be removed, and violators may be banned.</li>
        <li>Content that spreads misinformation or violates intellectual property rights is not allowed.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">4. Prohibited Activities</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>Any form of hacking, phishing, or unauthorized access is strictly forbidden.</li>
        <li>Automated bots or scrapers are not allowed without prior permission.</li>
        <li>Users cannot impersonate others or create multiple fake accounts.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">5. Account Termination</h2>
      <p className="mb-4">
        We reserve the right to suspend or terminate accounts that violate these terms, including but not limited to abusive behavior, spamming, or unauthorized activities.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">6. Payment & Transactions</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>Premium features or services may require payments processed via secure third-party providers.</li>
        <li>We do not store credit card information directly.</li>
        <li>Refund policies are outlined separately for paid services.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">7. Changes to Terms</h2>
      <p className="mb-4">
        We may update these Terms of Service at any time. Continued use of our platform constitutes agreement to the latest version.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">8. Contact Us</h2>
      <p className="mb-4">
        If you have any questions about these terms, please contact us at:
      </p>
      <p className="mb-4">
        <strong>Email:</strong> <a href="mailto:support@codercommunity.world" className="text-blue-500 underline">support@codercommunity.world</a>
      </p>

      <p className="mt-6">Thank you for being a part of <strong>Coder Community</strong>!</p>
    </div>
  );
};

export default TermsOfService;
