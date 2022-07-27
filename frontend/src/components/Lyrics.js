import React from 'react'


const Lyrics = ({ lyrics, writers, meta }) => {
  const { title, subtitle } = meta

  return (

    <>
      <section className="h-auto bg-gray-900" id="lyrics">
        <div className="max-w-7xl mx-auto py-16 px-10 sm:py-24 sm:px-6 lg:px-8 sm:text-center">
          {/* <h2 className="text-base font-semibold text-green-500 tracking-wide uppercase">
            LYRICS
          </h2> */}
          <p className="mt-1 text-4xl font-extrabold text-gray-300 sm:text-5xl sm:tracking-tight lg:text-6xl">
            {title} <span className="text-green-500">|</span> {subtitle}
          </p>
          <p className="max-w-3xl mt-5 mx-auto text-xl text-gray-500">
            {writers.slice(0, -36)}
          </p>
          <div class="mt-16 columns-2">

            {lyrics.text.map((line, index) => {
              return (
                <div class="column">
                  <p className='text-xl text-gray-300'> {line}</p>
                </div>
              )

            })}

          </div>
        </div>
      </section>

      {/* <div class="columns-2">

          {lyrics.text.map((line, index) => {
            return (
              <div class="column">
                <p> {line}</p>
              </div>
            )

          })}

        </div> */}
    </>


  )
}

export default Lyrics