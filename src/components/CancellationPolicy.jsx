import React from "react";

const CancellationPolicy = () => {
  return (
    <div className="container mx-auto p-6">
    <h1 className="text-3xl font-bold mb-4">Cancellation Policy</h1>
    <p className="mb-4">
      At <strong>Coder Community</strong>, we strive to provide a seamless experience for our users. 
      If you wish to cancel your subscription, please review our policy below.
    </p>

    <h2 className="text-2xl font-semibold mt-6 mb-2">Cancellation Terms:</h2>
    <ul className="list-disc ml-6 mb-4">
      <li>Users can cancel their subscription at any time through their account settings.</li>
      <li>Cancelling a subscription will stop future renewals, but users will retain access to premium features until the end of their billing period.</li>
      <li>Once canceled, subscriptions cannot be reinstated, but users can resubscribe anytime.</li>
    </ul>

    <p className="mb-4">
      Please note that cancellations **do not guarantee refunds** unless stated in our 
      <a href="/refund-policy" className="text-blue-500 underline"> Refund Policy</a>.
    </p>

    <p className="mb-4">
      If you have any issues canceling your subscription, feel free to contact us at 
      <a href="mailto:support@codercommunity.world" className="text-blue-500 underline"> support@codercommunity.world</a>.
    </p>

    <p className="mt-6">Thank you for being a part of <strong>Coder Community</strong>!</p>
  </div>
  );
};

export default CancellationPolicy;
