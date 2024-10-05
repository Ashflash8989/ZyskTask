import React from 'react';

const Feature = () => {
  return (
    <div className="px-4 py-8 md:px-16 lg:px-32 text-center mt-12">
      {/* Heading Section */}
      <div className="mb-12">
        <h4 className="text-indigo-600 font-semibold">Features</h4>
        <h2 className="text-3xl md:text-4xl font-bold mt-5">
          Analytics that feels like it’s from the future
        </h2>
        <p className="text-gray-600 mt-4">
          Powerful, self-serve product and growth analytics to help you convert, engage,
          and retain more users. Trusted by over 4,000 startups.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Feature 1 */}
        <div className="p-6 ">
          <div className="mb-4">
            <svg
              className="w-12 h-12 mx-auto text-indigo-600"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 10h.01M12 10h.01M16 10h.01M9 16h6M19 16h2a2 2 0 002-2V8a2 2 0 00-2-2h-2V4H5v2H3a2 2 0 00-2 2v6a2 2 0 002 2h2"
              ></path>
            </svg>
          </div>
          <h4 className="text-lg font-semibold mb-2">Share team inboxes</h4>
          <p className="text-gray-600">
            Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="p-6 ">
          <div className="mb-4">
            <svg
              className="w-12 h-12 mx-auto text-indigo-600"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 8v4m0 4h.01M5.45 19H18.55C20.59 19 22 17.59 22 15.55V8.45C22 6.41 20.59 5 18.55 5H5.45C3.41 5 2 6.41 2 8.45v7.1C2 17.59 3.41 19 5.45 19z"
              ></path>
            </svg>
          </div>
          <h4 className="text-lg font-semibold mb-2">Deliver instant answers</h4>
          <p className="text-gray-600">
            An all-in-one customer service platform that helps you balance everything your customers need to be happy.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="p-6 ">
          <div className="mb-4">
            <svg
              className="w-12 h-12 mx-auto text-indigo-600"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11 17.01l-4-4 4-4m8 8v-8"
              ></path>
            </svg>
          </div>
          <h4 className="text-lg font-semibold mb-2">Manage your team with reports</h4>
          <p className="text-gray-600">
            Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drill down on the data in a couple clicks.
          </p>
        </div>

        {/* Feature 4 */}
        <div className="p-6 ">
          <div className="mb-4">
            <svg
              className="w-12 h-12 mx-auto text-indigo-600"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 10h-6l1-2H9L8 10H4m0 0v8h16v-8m-9 5h2m-2-4h2"
              ></path>
            </svg>
          </div>
          <h4 className="text-lg font-semibold mb-2">Connect with customers</h4>
          <p className="text-gray-600">
            Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email without confusion.
          </p>
        </div>

        {/* Feature 5 */}
        <div className="p-6 ">
          <div className="mb-4">
            <svg
              className="w-12 h-12 mx-auto text-indigo-600"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 16h-1v-4h1m0-4h-1m-7 4v4c0 .6.4 1 1 1h4v-6H5zm14-2h-2v6h2c.6 0 1-.4 1-1v-4c0-.6-.4-1-1-1zM10 9h4V5h-4v4z"
              ></path>
            </svg>
          </div>
          <h4 className="text-lg font-semibold mb-2">Connect the tools you already use</h4>
          <p className="text-gray-600">
            Explore 100+ integrations that make your day-to-day workflow more efficient and familiar. Plus, our extensive developer tools.
          </p>
        </div>

        {/* Feature 6 */}
        <div className="p-6 ">
          <div className="mb-4">
            <svg
              className="w-12 h-12 mx-auto text-indigo-600"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 8V4m0 16v-4m8-4h-4m-8 0H4m12 0a4 4 0 11-8 0 4 4 0 118 0z"
              ></path>
            </svg>
          </div>
          <h4 className="text-lg font-semibold mb-2">Our people make the difference</h4>
          <p className="text-gray-600">
            We’re an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 when you need help.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Feature;
