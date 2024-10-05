import React from "react";
import img from './Asset/w-1.jpg'

function Testimonial() {
  return (
    <div className="bg-gray-50 py-16 px-4 lg:px-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900">
          We’ve been using Untitled to kick start every new project and can’t
          imagine working without it.
        </h2>
        <div className="flex justify-center mt-6">
          <div className="flex items-center">
            <img
              className="w-12 h-12 rounded-full"
              src={img}
              alt="Candice Wu"
            />
            <div className="ml-4 text-left">
              <p className="font-medium text-gray-800">Candice Wu</p>
              <p className="text-sm text-gray-500">Product Manager, Sisyphus</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
