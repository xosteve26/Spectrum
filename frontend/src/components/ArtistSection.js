import React from 'react'

const ArtistSection = ({image, artistName}) => {
  return (
      <div className="flex-grow bg-gradient-to-b to-white from-green-400">
          <section className="lg:w-4/5 mx-auto flex flex-wrap flex items-end space-x-7 h-64 text-black padding-8">
            <img className="h-44 w-44 shadow-2xl rounded-full" src={image} alt="artist-placeholder" />
              <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                {/* <p>ARTIST NAME</p> */}
                <h1 className="text-2xl md:text-3xl xl:text-5xl mb-2">{artistName}</h1>

                  <div className="flex mb-1">
                      <span className="flex items-center">
                          <img src="/folder-music.svg" className=" w-6 h-6 focus:outline-none" />
                          <span className="text-gray-600 ml-1">Total Albums:  25</span>
                      </span>

                  </div>
                  <div className="flex mb-4">
                      <span className="flex items-center">
                          <img src="/music.svg" className="w-6 h-6 focus:outline-none" />
                          <span className="text-gray-600 ml-1">Total Songs:  25</span>
                      </span>

                  </div>
                </div>

        </section>

      </div>

  )
}

export default ArtistSection