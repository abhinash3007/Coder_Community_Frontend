import React from "react";

const CancellationPolicy = () => {
  return (
    <div className="container max-w-7xl mt-10 mx-auto p-12 md:p-24 lg:p-36 bg-base-300 rounded-lg shadow-lg">
      <div className="flex flex-col justify-center mb-12">
        <h1 className="text-5xl font-bold mb-8 text-center">Cancellation Policy</h1>
        <p className="text-xl leading-relaxed text-center mb-12">
          At <strong>Coder Community</strong>, we strive to provide a seamless experience for our users. 
          If you wish to cancel your subscription, please review our policy below.
        </p>
      </div>

      <div className="flex flex-col mb-12">
        <h2 className="text-4xl font-semibold mb-4">Cancellation Terms:</h2>
        <div className="bg-base-100 p-6 rounded-lg mb-4 mx-auto w-full md:w-4/5 lg:w-3/4 xl:w-2/3">
          <ul className="list-disc ml-6 mb-4">
            <li className="text-xl leading-relaxed mb-2">
              Users can cancel their subscription at any time through their account settings.
            </li>
            <li className="text-xl leading-relaxed mb-2">
              Cancelling a subscription will stop future renewals, but users will retain access to premium features until the end of their billing period.
            </li>
            <li className="text-xl leading-relaxed mb-2">
              Once canceled, subscriptions cannot be reinstated, but users can resubscribe anytime.
            </li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col mb-12">
        <h2 className="text-4xl font-semibold mb-4">Refund Policy</h2>
        <div className="bg-base-100 p-6 rounded-lg mb-4 mx-auto w-full md:w-4/5 lg:w-3/4 xl:w-2/3">
          <p className="text-xl leading-relaxed mb-4">
            Please note that cancellations **do not guarantee refunds** unless stated in our 
            <a href="/refund-policy" className="text-blue-500 underline"> Refund Policy</a>.
          </p>
        </div>
      </div>

      <div className="flex flex-col mb-12">
        <h2 className="text-4xl font-semibold mb-4">Need Assistance?</h2>
        <div className="bg-base-100 p-6 rounded-lg mb-4 mx-auto w-full md:w-4/5 lg:w-3/4 xl:w-2/3">
          <p className="text-xl leading-relaxed mb-4">
            If you have any issues canceling your subscription, feel free to contact us at 
            <a href="mailto:support@codercommunity.world" className="text-blue-500 underline"> support@codercommunity.world</a>.
          </p>
        </div>
      </div>

      <p className="text-2xl leading-relaxed text-center mt-12">Thank you for being a part of <strong>Coder Community</strong>!</p>
    </div>
  );
};

export default CancellationPolicy;
