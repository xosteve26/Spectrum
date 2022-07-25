import React from 'react'

const ArtistSection = ({image, artistName}) => {
  return (
      <div className="flex-grow bg-gradient-to-b to-white from-green-400">
          <section className="lg:w-4/5 mx-auto flex flex-wrap flex items-end space-x-7 h-64 text-black padding-8">
            <img className="h-44 w-44 shadow-2xl rounded-full" src={image} alt="artist-placeholder" />
            <div>
                <p>ARTIST NAME</p>
                <h1 className="text-2xl md:text-3xl xl:text-5xl">{artistName}</h1>
            </div>

        </section>

      </div>

  )
}

export default ArtistSection