import React from 'react'

const Footer = () => {
  return (
      <footer className="text-gray-600 body-font bg-gray-900">
          <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
              <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-300">
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-10 h-10 text-white p-2 bg-green-500 rounded-full"
                      viewBox="0 0 24 24"
                  >
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                  <span className="ml-3 text-xl">Spectrum</span>
              </a>
              <p className="text-sm text-gray-300 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
                  © 2022 Spectrum —
                  <a
                      href="https://twitter.com/knyttneve"
                      className="text-gray-300 ml-1"
                      rel="noopener noreferrer"
                      target="_blank"
                  >
                      @spectrum
                  </a>
              </p>
              <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                  <a href="https://github.com/xosteve26/Spectrum" target="_blank" className="text-gray-500">
                      <img src="https://cdn-icons-png.flaticon.com/512/1051/1051275.png" className='w-5 h-5'/>
                  </a>
                  
              </span>
          </div>
      </footer>

  )
}

export default Footer