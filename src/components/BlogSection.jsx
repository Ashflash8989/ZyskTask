import React from 'react';


const BlogSection = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4 md:flex md:justify-between">
      {/* Left Section (Stats for Olivia Rhye) */}
      <div className="md:w-1/2 bg-white shadow-md rounded-lg p-6 mb-6 md:mb-0">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">Stats for Olivia Rhye</h2>
          <div className="flex items-center space-x-2">
            <button className="bg-green-100 text-green-500 px-3 py-1 rounded-lg">Messages</button>
            <button className="bg-purple-100 text-purple-600 px-3 py-1 rounded-lg">Edit</button>
          </div>
        </div>

        {/* Profile Views Section */}
        <div className="mt-6">
          <div className="flex space-x-4">
            <button className="text-sm bg-gray-100 px-4 py-1 rounded-lg">12 months</button>
            <button className="text-sm bg-gray-100 px-4 py-1 rounded-lg">30 days</button>
            <button className="text-sm bg-gray-100 px-4 py-1 rounded-lg">7 days</button>
          </div>

          {/* Placeholder for Chart */}
          <div className="h-40 bg-gray-200 mt-4 rounded-lg"></div>
        </div>

        {/* Biggest Fans Section */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold">Biggest fans</h3>
          <div className="flex items-center space-x-3 mt-4">
            <img className="w-8 h-8 rounded-full" src="https://via.placeholder.com/150" alt="User Avatar" />
            <div>
              <h4 className="text-sm font-medium">Phoenix Baker</h4>
              <p className="text-xs text-gray-500">@phoenix.baker</p>
            </div>
            <p className="ml-auto text-sm">24 likes</p>
          </div>
        </div>
      </div>

      {/* Right Section (Chat and Favorite Designers) */}
      <div className="md:w-1/2 bg-white shadow-md rounded-lg p-6">
        {/* Chat Section */}
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">Messages</h2>
          <div className="flex items-center space-x-2">
            <button className="bg-purple-100 text-purple-600 px-3 py-1 rounded-lg">Edit</button>
          </div>
        </div>

        {/* Placeholder for Messages */}
        <div className="h-64 mt-4 overflow-y-auto">
          <div className="text-sm">
            <div className="flex justify-start mb-4">
              <div className="bg-gray-200 p-2 rounded-lg">
                <p>I'll have a more thorough read and get back to you by tomorrow. Is that okay?</p>
              </div>
            </div>
            <div className="flex justify-end mb-4">
              <div className="bg-purple-100 p-2 rounded-lg">
                <p>Sounds perfect, thanks!</p>
              </div>
            </div>
          </div>
        </div>

        {/* Input Box */}
        <div className="mt-4 flex items-center space-x-3">
          <input
            type="text"
            placeholder="Message"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
          />
          <button className="bg-purple-600 text-white px-4 py-2 rounded-lg">Send</button>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
