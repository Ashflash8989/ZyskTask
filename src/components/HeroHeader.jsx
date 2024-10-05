import React from "react";
import img from "./img1.png.png";
import img1 from './Asset/Boltshift.png'
import img2 from './Asset/Lightbox.png'
import img3 from './Asset/3.png'
import img4 from './Asset/4.png'
import img5 from './Asset/5.png'
import img6 from './Asset/6.png'
const HeroHeader = () => {
  return (
    <div className="min-h-screen flex flex-col items-center p-4">
      {/* Header Section */}
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800">
          Beautiful analytics to grow smarter
        </h1>
        <p className="text-gray-500 mt-4">
          Powerful, self-serve product and growth analytics to help you convert,
          engage, and retain more users. Trusted by over 4,000 startups.
        </p>
        <div className="mt-6 space-x-4">
          <button className="bg-white border border-gray-300 rounded-full py-2 px-6 text-gray-600 hover:bg-gray-100">
            Demo
          </button>
          <button className="bg-purple-600 text-white rounded-full py-2 px-6 hover:bg-purple-700">
            Sign up
          </button>
        </div>
      </header>

      {/* Stats Card */}

      <img src={img} alt="" />

      {/* Footer Section */}
      <footer className="mt-12 text-center text-gray-500">
        <p>Join 4,000+ companies already growing</p>
        <div className="flex justify-center mt-4 space-x-6">
          {/* Placeholder for company logos */}
          <img src={img1} className="bg-gray-200  "></img>
          <img src={img2} className="bg-gray-200  "></img>
          <img src={img3} className="bg-gray-200"></img>
          <img src={img4} className="bg-gray-200"></img>
          <img src={img5} className="bg-gray-200"></img>
          <img src={img6} className="bg-gray-200"></img>
        </div>
      </footer>
    </div>
  );
};

export default HeroHeader;
