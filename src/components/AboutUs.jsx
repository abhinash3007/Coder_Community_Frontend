import React from "react";

const AboutUs = () => {
  return (
    <div className="min-h-screen mt-10 flex flex-col items-center justify-center bg-base-300 text-white px-6 mx-15">
      <div className="max-w-5xl text-center mt-12">
        <h1 className="text-7xl font-bold mb-8 text-blue-400">
          About Coder Community
        </h1>
        <p className="text-xl leading-relaxed text-gray-300 mb-8">
          Welcome to{" "}
          <span className="text-blue-400 font-semibold">Coder Community</span>,
          a dynamic platform for developers to connect, collaborate, and grow.
          Our mission is to create a space where programmers of all levels can
          share knowledge, build projects, and foster professional
          relationships.
        </p>
        <div className="flex justify-center gap-12 mt-12">
          <div className="bg-gray-800 p-8 rounded-3xl shadow-2xl w-80 text-center">
            <h2 className="text-3xl font-semibold text-blue-400 mb-4">
              👨‍💻 Learn
            </h2>
            <p className="text-gray-300 mb-6">
              Expand your coding skills with insights from experienced
              developers.
            </p>
          </div>
          <div className="bg-gray-800 p-8 rounded-3xl shadow-2xl w-80 text-center">
            <h2 className="text-3xl font-semibold text-blue-400 mb-4">
              🤝 Connect
            </h2>
            <p className="text-gray-300 mb-6">
              Meet like-minded coders and build a strong professional network.
            </p>
          </div>
          <div className="bg-gray-800 p-8 rounded-3xl shadow-2xl w-80 text-center">
            <h2 className="text-3xl font-semibold text-blue-400 mb-4">
              🚀 Grow
            </h2>
            <p className="text-gray-300 mb-6">
              Showcase your skills, contribute to projects, and advance your
              career.
            </p>
          </div>
        </div>
        <div className="mt-12">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8 py-4 rounded-3xl shadow-2xl transition-all">
            Join Us Today
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
