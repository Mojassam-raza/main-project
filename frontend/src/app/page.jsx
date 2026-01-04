import Link from "next/link";
import React from 'react'

const Homepage = () => {
  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
      <section class="flex flex-col justify-between gap-6 sm:gap-10 md:gap-16 lg:flex-row">
        {/* <!-- content - start --> */}
        <div class="flex flex-col justify-center sm:text-center lg:py-12 lg:text-left xl:w-5/12 xl:py-24">
          <p class="mb-4 font-semibold text-indigo-500 md:mb-6 md:text-lg xl:text-xl">Many Software to introduce</p>

          <h1 class="mb-8 text-4xl font-bold text-black sm:text-5xl md:mb-12 md:text-6xl">Revolutionary way to build the web</h1>

          <p class="mb-8 leading-relaxed text-gray-500 md:mb-12 lg:w-4/5 xl:text-lg">This is a section of some simple Software filler text, also known as placeholder text. It shares some characteristics of a real Software written text but is random.</p>

          <div class="flex flex-col gap-2.5 sm:flex-row sm:justify-center lg:justify-start">
            <a href="#" class="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">Launch</a>

            <a href="#" class="inline-block rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base">Take tour</a>
          </div>
        </div>
        {/* <!-- content - end -->

      <!-- image - start --> */}
        <div class="h-48 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:h-auto xl:w-5/12">
          <img src="https://images.unsplash.com/photo-1618004912476-29818d81ae2e?auto=format&q=75&fit=crop&w=1000" loading="lazy" alt="Photo by Fakurian Design" class="h-full w-full object-cover object-center" />
        </div>
        {/* <!-- image - end --> */}
      </section>

      <div>
        <div className="bg-white py-6 sm:py-8 lg:py-12">
          <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
            {/* text - start */}
            <div className="mb-10 md:mb-16">
              <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
                Selected
              </h2>
              <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
                This is a section of some simple filler text, also known as placeholder
                text. It shares some characteristics of a real written text but is
                random or otherwise generated.
              </p>
            </div>
            {/* text - end */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {/* product - start */}
              <div>
                <a
                  href="#"
                  className="group relative block h-96 overflow-hidden rounded-t-lg bg-gray-100"
                >
                  <img
                    src="https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&q=75&fit=crop&crop=top&w=600&h=700"
                    loading="lazy"
                    alt="Photo by Austin Wade"
                    className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                  />
                  <span className="absolute left-0 top-3 rounded-r-lg bg-red-500 px-3 py-1.5 text-sm font-semibold uppercase tracking-wider text-white">
                    -50%
                  </span>
                </a>
                <div className="flex items-start justify-between gap-2 rounded-b-lg bg-gray-100 p-4">
                  <div className="flex flex-col">
                    <a
                      href="#"
                      className="font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-lg"
                    >
                      Fancy Outfit
                    </a>
                    <span className="text-sm text-gray-500 lg:text-base">
                      by Fancy Brand
                    </span>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="font-bold text-gray-600 lg:text-lg">$19.99</span>
                    <span className="text-sm text-red-500 line-through">$39.99</span>
                  </div>
                </div>
              </div>
              {/* product - end */}
              {/* product - start */}
              <div>
                <a
                  href="#"
                  className="group relative block h-96 overflow-hidden rounded-t-lg bg-gray-100"
                >
                  <img
                    src="https://images.unsplash.com/photo-1523359346063-d879354c0ea5?auto=format&q=75&fit=crop&crop=top&w=600&h=700"
                    loading="lazy"
                    alt="Photo by Nick Karvounis"
                    className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                  />
                </a>
                <div className="flex items-start justify-between gap-2 rounded-b-lg bg-gray-100 p-4">
                  <div className="flex flex-col">
                    <a
                      href="#"
                      className="font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-lg"
                    >
                      Cool Outfit
                    </a>
                    <span className="text-sm text-gray-500 lg:text-base">
                      by Cool Brand
                    </span>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="font-bold text-gray-600 lg:text-lg">$29.99</span>
                  </div>
                </div>
              </div>
              {/* product - end */}
              {/* product - start */}
              <div>
                <a
                  href="#"
                  className="group relative block h-96 overflow-hidden rounded-t-lg bg-gray-100"
                >
                  <img
                    src="https://images.unsplash.com/photo-1548286978-f218023f8d18?auto=format&q=75&fit=crop&crop=top&w=600&h=700"
                    loading="lazy"
                    alt="Photo by Austin Wade"
                    className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                  />
                </a>
                <div className="flex items-start justify-between gap-2 rounded-b-lg bg-gray-100 p-4">
                  <div className="flex flex-col">
                    <a
                      href="#"
                      className="font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-lg"
                    >
                      Nice Outfit
                    </a>
                    <span className="text-sm text-gray-500 lg:text-base">
                      by Nice Brand
                    </span>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="font-bold text-gray-600 lg:text-lg">$35.00</span>
                  </div>
                </div>
              </div>
              {/* product - end */}
              {/* product - start */}
              <div>
                <a
                  href="#"
                  className="group relative block h-96 overflow-hidden rounded-t-lg bg-gray-100"
                >
                  <img
                    src="https://images.unsplash.com/photo-1566207274740-0f8cf6b7d5a5?auto=format&q=75&fit=crop&crop=top&w=600&h=700"
                    loading="lazy"
                    alt="Photo by Vladimir Fedotov"
                    className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                  />
                </a>
                <div className="flex items-start justify-between gap-2 rounded-b-lg bg-gray-100 p-4">
                  <div className="flex flex-col">
                    <a
                      href="#"
                      className="font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-lg"
                    >
                      Lavish Outfit
                    </a>
                    <span className="text-sm text-gray-500 lg:text-base">
                      by Lavish Brand
                    </span>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="font-bold text-gray-600 lg:text-lg">$49.99</span>
                  </div>
                </div>
              </div>
              {/* product - end */}
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Homepage;