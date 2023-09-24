import React from 'react'

const Footer = () => {
  return (
    <>
      <div className="container px-5 py-36 mx-auto flex">
        <div
          className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md"
          id="contact"
        >
          <h2 className="text-gray-900 text-2xl mb-1 font-medium title-font">
            Contact Me
          </h2>
          <p className="leading-relaxed mb-5 text-gray-600">
            Want to learn more about how SEO can help your busines grow? Fill
            out he form below with your email and website address. I'll look at
            it and get back with you ASAP.
          </p>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-600"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            ></textarea>
          </div>
          <button className="text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
            Get My Website Audit &#8594;
          </button>
          <p className="text-xs text-gray-500 mt-3">
            I never sell you information.
          </p>
        </div>
      </div>
      <div className="text-center py-5 bg-black text-white">
        SEO for Electricians in NYC &copy; {new Date().getFullYear()}
      </div>
    </>
  )
}

export default Footer
