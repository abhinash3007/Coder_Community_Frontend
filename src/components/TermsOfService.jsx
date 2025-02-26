import React from "react";

const TermsOfService = () => {
  return (
    <div className="max-w-7xl mx-auto p-12 md:p-24 bg-base-300 lg:p-36 rounded-lg shadow-lg mt-10">
      <div className="flex flex-col md:flex-row justify-center mb-12">
        <div className="md:w-2/3 lg:w-3/4 xl:w-3/5 mb-8 md:mb-0">
          <h1 className="text-5xl font-bold mb-8 text-center">Terms of Service</h1>
          {/* <p className="text-xl leading-relaxed mb-12">
            Welcome to <strong>Coder Community</strong>, a platform for developers to connect, share knowledge, and collaborate. 
            By accessing or using our platform, you agree to abide by these terms.
          </p> */}
        </div>
      </div>

      <div className="flex flex-col mb-12">
        <h2 className="text-2xl font-semibold mb-4">1. Account Registration</h2>
        <div className="bg-base-100 p-6 rounded-lg mb-4">
          <ul className="list-disc ml-6 mb-4">
            <li className="text-lg leading-relaxed mb-2">Users must provide accurate and up-to-date information during registration.</li>
            <li className="text-lg leading-relaxed mb-2">You are responsible for maintaining the security of your account and password.</li>
            <li className="text-lg leading-relaxed mb-2">Any suspicious activity should be reported to our support team immediately.</li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col mb-12">
        <h2 className="text-2xl font-semibold mb-4">2. Community Guidelines</h2>
        <div className="bg-base-100 p-6 rounded-lg mb-4">
          <ul className="list-disc ml-6 mb-4">
            <li className="text-lg leading-relaxed mb-2">Respect all members of the community—harassment, hate speech, and discrimination are strictly prohibited.</li>
            <li className="text-lg leading-relaxed mb-2">Do not post spam, self-promotion, or misleading content.</li>
            <li className="text-lg leading-relaxed mb-2">Content shared must be relevant to programming, development, and tech-related discussions.</li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col mb-12">
        <h2 className="text-2xl font-semibold mb-4">3. User Content</h2>
        <div className="bg-base-100 p-6 rounded-lg mb-4">
          <ul className="list-disc ml-6 mb-4">
            <li className="text-lg leading-relaxed mb-2">Users retain ownership of the content they post but grant us a license to display and distribute it.</li>
            <li className="text-lg leading-relaxed mb-2">Offensive, copyrighted, or illegal content will be removed, and violators may be banned.</li>
            <li className="text-lg leading-relaxed mb-2">Content that spreads misinformation or violates intellectual property rights is not allowed.</li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col mb-12">
        <h2 className="text-2xl font-semibold mb-4">4. Prohibited Activities</h2>
        <div className="bg-base-100 p-6 rounded-lg mb-4">
          <ul className="list-disc ml-6 mb-4">
            <li className="text-lg leading-relaxed mb-2">Any form of hacking, phishing, or unauthorized access is strictly forbidden.</li>
            <li className="text-lg leading-relaxed mb-2">Automated bots or scrapers are not allowed without prior permission.</li>
            <li className="text-lg leading-relaxed mb-2">Users cannot impersonate others or create multiple fake accounts.</li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col mb-12">
        <h2 className="text-2xl font-semibold mb-4">5. Account Termination</h2>
        <div className="bg-base-100 p-6 rounded-lg mb-4">
          <p className="text-2xl leading-relaxed mb-4">
            We reserve the right to suspend or terminate accounts that violate these terms, including but not limited to abusive behavior, spamming, or unauthorized activities.
          </p>
        </div>
      </div>

      <div className="flex flex-col mb-12">
        <h2 className="text-2xl font-semibold mb-4">6. Payment & Transactions</h2>
        <div className="bg-base-100 p-6 rounded-lg mb-4">
          <ul className="list-disc ml-6 mb-4">
            <li className="text-lg leading-relaxed mb-2">Premium features or services may require payments processed via secure third-party providers.</li>
            <li className="text-lg leading-relaxed mb-2">We do not store credit card information directly.</li>
            <li className="text-lg leading-relaxed mb-2">Refund policies are outlined separately for paid services.</li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col mb-12">
        <h2 className="text-2xl font-semibold mb-4">7. Changes to Terms</h2>
        <div className="bg-base-100 p-6 rounded-lg mb-4">
          <p className="text-2xl leading-relaxed mb-4">
            We may update these Terms of Service at any time. Continued use of our platform constitutes agreement to the latest version.
          </p>
        </div>
      </div>

      <div className="flex flex-col mb-12">
        <h2 className="text-2xl font-semibold mb-4">8. Contact Us</h2>
        <div className="bg-base-100 p-6 rounded-lg mb-4">
          <p className="text-2xl leading-relaxed mb-4">
            If you have any questions about these terms, please contact us at:
          </p>
          <p className="text-2xl leading-relaxed mb-4">
            <strong>Email:</strong> <a href="mailto:support@codercommunity.world" className="text-blue-500 underline">support@codercommunity.world</a>
          </p>
        </div>
      </div>

      <p className="text-2xl leading-relaxed text-center mt-12">Thank you for being a part of <strong>Coder Community</strong>!</p>
    </div>
  );
};

export default TermsOfService;
