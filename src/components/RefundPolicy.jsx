import React from "react";

const RefundPolicy = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Refund Policy</h1>
      
      <p className="mb-4">
        These terms and conditions constitute the <strong>Refund Policy</strong> of <strong>Coder Community</strong>. 
        By subscribing to our services, you agree to the terms outlined below.
      </p>

      <p className="mb-4">
        We value our users and aim to provide the best possible experience. 
        If you are not satisfied with your purchase, we are here to assist you.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">1. Eligibility for Refund</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>Refund requests must be made within <strong>7 days</strong> of purchase.</li>
        <li>Only subscriptions purchased directly through <strong>Coder Community</strong> are eligible for a refund.</li>
        <li>Refunds apply only to premium memberships or paid services, not free features.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">2. Non-Refundable Cases</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>Requests made after <strong>7 days</strong> from the purchase date.</li>
        <li>Partial refunds for ongoing subscription periods.</li>
        <li>Refunds for services that have been fully utilized.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">3. Refund Process</h2>
      <p className="mb-4">
        To request a refund, contact our support team at{" "}
        <a href="mailto:support@codercommunity.world" className="text-blue-500 underline">
          support@codercommunity.world
        </a>{" "}
        with your transaction details. Once approved, refunds will be processed within <strong>5-7 business days</strong>.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">4. Contact Us</h2>
      <p className="mb-4">
        If you have any questions regarding our refund policy, feel free to reach out to our support team at{" "}
        <a href="mailto:support@codercommunity.world" className="text-blue-500 underline">
          support@codercommunity.world
        </a>
        .
      </p>

      <p className="mt-6">Thank you for being a part of <strong>Coder Community</strong>!</p>
    </div>
  );
};

export default RefundPolicy;
