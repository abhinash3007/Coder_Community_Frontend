import React from "react";

const RefundPolicy = () => {
  return (
    <div className="container bg-base-300 mx-auto max-w-7xl p-12 md:p-24 lg:p-36 rounded-lg shadow-lg mt-10">
      <div className="flex flex-col md:flex-row justify-center mb-12">
        <div className="md:w-2/3 lg:w-3/4 xl:w-3/5 mb-8 md:mb-0">
          <h1 className="text-5xl font-bold mb-8 text-center">Refund Policy</h1>
          
        </div>
      </div>

      <div className="flex flex-col mb-12">
        <h2 className="text-3xl font-semibold mb-4">Introduction</h2>
        <div className="bg-base-100 p-6 rounded-lg mb-4">
          <p className="text-lg leading-relaxed mb-4">
            We value our users and aim to provide the best possible experience. 
            If you are not satisfied with your purchase, we are here to assist you.
          </p>
        </div>
      </div>

      <div className="flex flex-col mb-12">
        <h2 className="text-2xl font-semibold mb-4">1. Eligibility for Refund</h2>
        <div className="bg-base-100 p-6 rounded-lg mb-4">
          <ul className="list-disc ml-6 mb-4">
            <li className="text-lg leading-relaxed mb-2">Refund requests must be made within <strong>7 days</strong> of purchase.</li>
            <li className="text-lg leading-relaxed mb-2">Only subscriptions purchased directly through <strong>Coder Community</strong> are eligible for a refund.</li>
            <li className="text-lg leading-relaxed mb-2">Refunds apply only to premium memberships or paid services, not free features.</li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col mb-12">
        <h2 className="text-2xl font-semibold mb-4">2. Non-Refundable Cases</h2>
        <div className="bg-base-100 p-6 rounded-lg mb-4">
          <ul className="list-disc ml-6 mb-4">
            <li className="text-lg leading-relaxed mb-2">Requests made after <strong>7 days</strong> from the purchase date.</li>
            <li className="text-lg leading-relaxed mb-2">Partial refunds for ongoing subscription periods.</li>
            <li className="text-lg leading-relaxed mb-2">Refunds for services that have been fully utilized.</li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col mb-12">
        <h2 className="text-2xl font-semibold mb-4">3. Refund Process</h2>
        <div className="bg-base-100 p-6 rounded-lg mb-4">
          <p className="text-lg leading-relaxed mb-4">
            To request a refund, contact our support team at{" "}
            <a href="mailto:support@codercommunity.world" className="text-blue-500 underline">
              support@codercommunity.world
            </a>{" "}
            with your transaction details. Once approved, refunds will be processed within <strong>5-7 business days</strong>.
          </p>
        </div>
      </div>

      <div className="flex flex-col mb-12">
        <h2 className="text-2xl font-semibold mb-4">4. Contact Us</h2>
        <div className="bg-base-100 p-6 rounded-lg mb-4">
          <p className="text-lg leading-relaxed mb-4">
            If you have any questions regarding our refund policy, feel free to reach out to our support team at{" "}
            <a href="mailto:support@codercommunity.world" className="text-blue-500 underline">
              support@codercommunity.world
            </a>
           .
          </p>
        </div>
      </div>

      <p className="text-2xl leading-relaxed text-center mt-12">Thank you for being a part of <strong>Coder Community</strong>!</p>
    </div>
  );
};

export default RefundPolicy;
