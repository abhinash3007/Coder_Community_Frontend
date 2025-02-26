import React from "react";

const ShippingPolicy = () => {
  return (
    <div className="container max-w-7xl mt-10 mx-auto p-12 md:p-24 lg:p-36 bg-base-300 rounded-lg shadow-lg">
      <div className="flex flex-col justify-center mb-12">
        <h1 className="text-5xl font-bold mb-8 text-center">Shipping Policy</h1>
        <p className="text-2xl leading-relaxed text-center mb-12">
          Since Coder Community provides digital services, no physical products are shipped. 
          All purchases grant instant access to digital content and services.
        </p>
      </div>
      <div className="flex flex-col justify-center mb-12">
        <h2 className="text-4xl font-semibold mb-4 text-center">What You Can Expect</h2>
        <div className="bg-base-100 p-6 rounded-lg mb-4 mx-auto w-full md:w-2/3 lg:w-1/2 xl:w-1/3">
          <p className="text-2xl leading-relaxed mb-4">
            With instant access to our services, you can start learning and growing right away. 
            No more waiting for shipping or handling, just immediate access to the resources you need.
          </p>
        </div>
      </div>
      <p className="text-2xl leading-relaxed text-center mt-12">Thank you for being a part of <strong>Coder Community</strong>!</p>
    </div>
  );
};

export default ShippingPolicy;
