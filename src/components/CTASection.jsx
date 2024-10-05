import React from 'react'

function CTASection() {
  return (
    <div>
        <div className="bg-gray-50  py-16 px-4 lg:px-8 mt-8 text-center">
        <p className='text-3xl font-bold text-gray-900 '>Start your free trial?</p>
        <p className='mt-6'>Join over 4,000+ startups already growing with Untitled.</p>
        <div className='flex space-x-4 justify-center'>
        <button className="mt-4 px-6 py-2 bg-white text-dark rounded-lg ">
          Learn more
        </button>
        <button className="mt-4 px-6 py-2 bg-indigo-600 text-white rounded-lg ">
          Get in touch
        </button>
        </div>
      </div>
    </div>
  )
}

export default CTASection
