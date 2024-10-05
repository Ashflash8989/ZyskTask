import React from "react";
import img1 from "./Asset/post1.png";
import img2 from "./Asset/post2.png";
import img3 from "./Asset/post3.png";

const Posts = () => {
  const posts = [
    {
      category: "Design",
      title: "UX review presentations",
      description:
        "How do you create compelling presentations that wow your colleagues and impress your managers?",
      author: "Olivia Rhye",
      date: "20 Jan 2024",
      imageUrl: img1, // Replace with actual image URL
    },
    {
      category: "Product",
      title: "Migrating to Linear 101",
      description:
        "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here's how to get started.",
      author: "Phoenix Baker",
      date: "19 Jan 2024",
      imageUrl: img2, // Replace with actual image URL
    },
    {
      category: "Software Engineering",
      title: "Building your API stack",
      description:
        "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.",
      author: "Lana Steiner",
      date: "18 Jan 2024",
      imageUrl: img3, // Replace with actual image URL
    },
  ];

  return (
    <section className="py-12 px-4 bg-white">
      {/* Header Section */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center mb-12">
        <div className="text-left mb-6 md:mb-0">
          <h2 className="text-purple-700 font-semibold text-sm">Our blog</h2>
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Latest blog posts
          </h1>
          <p className="text-gray-500">
            Tools and strategies modern teams need to help their companies grow.
          </p>
        </div>
        <div>
          <button className="bg-purple-600 text-white py-2 px-6 rounded-full hover:bg-purple-700">
            View all posts
          </button>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {posts.map((post, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <img
              src={post.imageUrl}
              alt={post.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-purple-600 text-sm font-semibold mb-1">
                {post.category}
              </h3>
              <h2 className="text-xl font-bold text-gray-800 mb-2">
                {post.title}
              </h2>
              <p className="text-gray-500 mb-4">{post.description}</p>
              <div className="flex items-center text-sm text-gray-400">
                <span className="mr-2">{post.author}</span>
                <span>{post.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Posts;
