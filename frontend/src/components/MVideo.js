import React from 'react'

const MVideo = () => {
  return (
    <div className="container px-5 py-24 mx-auto">
      <div className="lg:w-4/5 mx-auto grid grid-cols-2 gap-32 border-solid border-2 border-sky-500">
      
          
        
        <div>
          <h1 className='text-gray-900 text-3xl title-font font-medium mb-1'>MUSIC VIDEO</h1>
          <iframe className="lg:w-1/3 w-full lg:h-auto h-64 object-cover object-center rounded"  src="https://www.youtube.com/embed/BC19kwABFwc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>

        <div>
          <h1 className='text-gray-900 text-3xl title-font font-medium mb-1'>LYRICS</h1>
          <iframe className="lg:w-1/3 w-full lg:h-auto h-64 object-cover object-center rounded" src="https://www.youtube.com/embed/BC19kwABFwc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>

      </div>
      
      </div>
  )
}

export default MVideo