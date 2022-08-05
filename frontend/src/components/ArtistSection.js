import React from 'react'
//bg-gradient-to-b to-gray-900 from-green-500
const ArtistSection = ({image, artistName, tSongs, tAlbums}) => {
  return (
      <div className="flex-grow  px-2 py-20  md:px-0  mt-8">
          <section className="lg:w-4/5 mx-auto flex flex-wrap flex items-end space-x-7 h-44 text-D8E9A8 padding-8 ">
            <img className="h-48 w-48 shadow-2xl rounded-full" src={image} alt="artist-placeholder" />
              <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                {/* <p>ARTIST NAME</p> */}
          
                  <p className="mt-1 text-4xl font-extrabold text-gray-300 sm:text-5xl sm:tracking-tight lg:text-6xl">
                      {artistName}
                  </p>

                  <div className="flex mb-1">
                      <span className="flex items-center">
                          <img src="/folder-music.png" className=" w-7 h-7 focus:outline-none mr-2" />
                          {/* <span className="text-gray-600 ml-1">Total Albums:  25</span> */}
                          <h1 className="text-gray-300 text-lg title-font font-medium mb-1">
                              Total Albums:  {tAlbums}
                          </h1>
                      </span>

                  </div>
                  <div className="flex mb-4">
                      <span className="flex items-center">
                          <img src="/1238104.png" className="fill-white w-6 h-6 focus:outline-none mr-2" />
                          <h1 className="text-gray-300 text-lg title-font font-medium mb-1">
                              Total Songs:   {tSongs}
                          </h1>
                          
                      </span>

                  </div>
                </div>

        </section>

      </div>

  )
}

export default ArtistSection