import React from 'react'

const SEODiagnosis = () => {
  return (
    <section className="bg-slate-50 py-24" id="diagnosis">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl lg:text-5xl font-bold pb-4 text-center">
          Get Your Free SEO Diagnosis
        </h2>
        <p className="text-center">
          Find out why you’re not ranking #1 in Google for your most important
          keywords
        </p>
        <div className="max-w-3xl mx-auto">
          <form className="px-4 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                for="username"
              >
                Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Username"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                for="email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none borderrounded w-full py-3 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="email"
                placeholder="Joe@gmail.com"
              />
            </div>
            <div className="mb-6">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="website"
              >
                Website
              </label>
              <input
                className="shadow appearance-none rounded w-full py-4 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="website"
                type="text"
                placeholder="https://"
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-orange-700 hover:bg-orange-700 text-white font-bold py-2 px-7 rounded focus:outline-none focus:shadow-outline text-xl"
                type="button"
              >
                Get My SEO Diagnosis
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default SEODiagnosis
