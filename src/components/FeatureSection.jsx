import React from "react";
import img from './img2.png'

function FeatureSection() {
  return (
    <div className="px-4 py-8 md:px-16 lg:px-32 text-center">
          {/* Heading Section */}
          <div className="mb-12">
        <h4 className="text-indigo-600 font-semibold">Features</h4>
        <h2 className="text-3xl md:text-4xl font-bold mt-2">
          Cutting-edge features for advanced analytics
        </h2>
        <p className="text-gray-600 mt-4">
          Powerful, self-serve product and growth analytics to help you convert, engage,
          and retain more users. Trusted by over 4,000 startups.
        </p>
      </div>
          {/* Image Section */}
          <div className="flex justify-center mb-12">
        <img src={img} alt="Features Image" className="w-auto h-auto" />
      </div>
      {/* Features Section */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
        {/* Feature 1 */}
        <div>
          <div className="text-gray-800 font-semibold mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mx-auto text-purple-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 17h5l-1.405-1.405C18.987 14.579 19 13.31 19 12V8a5 5 0 00-10 0v4c0 1.31.013 2.579-.595 3.595L7 17h5"
              />
            </svg>
          </div>
          <h3 className="text-lg font-bold text-gray-900">
            Share team inboxes
          </h3>
          <p className="mt-2 text-gray-600">
            Whether you have a team of 2 or 200, our shared team inboxes keep
            everyone on the same page and in the loop.
          </p>
          <a
            href="#"
            className="text-purple-600 hover:underline mt-4 inline-block"
          >
            Learn more →
          </a>
        </div>

        {/* Feature 2 */}
        <div>
          <div className="text-gray-800 font-semibold mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mx-auto text-purple-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8c2.21 0 4-1.79 4-4S14.21 0 12 0s-4 1.79-4 4 1.79 4 4 4zm0 2c-2.21 0-4 1.79-4 4v5a1 1 0 001 1h6a1 1 0 001-1v-5c0-2.21-1.79-4-4-4z"
              />
            </svg>
          </div>
          <h3 className="text-lg font-bold text-gray-900">
            Deliver instant answers
          </h3>
          <p className="mt-2 text-gray-600">
            An all-in-one customer service platform that helps you balance
            everything your customers need to be happy.
          </p>
          <a
            href="#"
            className="text-purple-600 hover:underline mt-4 inline-block"
          >
            Learn more →
          </a>
        </div>

        {/* Feature 3 */}
        <div>
          <div className="text-gray-800 font-semibold mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mx-auto text-purple-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h3 className="text-lg font-bold text-gray-900">
            Manage your team with reports
          </h3>
          <p className="mt-2 text-gray-600">
            Measure what matters with Untitled’s easy-to-use reports. You can
            filter, export, and drill down on the data.
          </p>
          <a
            href="#"
            className="text-purple-600 hover:underline mt-4 inline-block"
          >
            Learn more →
          </a>
        </div>
      </div>
    </div>
  );
}

export default FeatureSection;
