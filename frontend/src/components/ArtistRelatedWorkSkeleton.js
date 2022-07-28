import React from 'react'

const ArtistRelatedWorkSkeleton = () => {
    const skeleton=[1,2,3,4,5,6]
  return (
      <>
          <section className="text-gray-600 body-font bg-gray-900">
              <div className="container px-28 py-24 mx-auto">
                  <div class="flex flex-wrap w-full mb-20 flex-col items-center text-center">
                      <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-300">Artist's Related Works</h1>
                      <div className="h-1 w-72 bg-green-500 rounded" />
                      <p class="lg:w-1/2 w-full leading-relaxed text-gray-300">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table.</p>
                  </div>
                  <div className="flex flex-wrap w-full mb-10">
                      <div class="scrollbar scrollbar-thin scrollbar-thumb-green-500 scrollbar-track-gray-600  flex overflow-x-auto space-x-8 ">
                        {skeleton.map((album,index)=>{
                            return(
                                <section class="flex-shrink-0 rounded-full">
                                    <div class="bg-gray-800 p-6 rounded-lg">
                                        <div className="bg-gray-600 animate-pulse h-64 w-72"></div>
                                        {/* <a target="_blank" href={album.rating.attributes.url}><img class="h-full rounded w-auto object-cover object-center mb-6" src={album.rating.attributes.artwork.url.replace("{w}x{h}", "300x300")} alt="content" /></a> */}
                                        <h3 class="h-2 w-32 bg-green-500 animate-pulse tracking-widest text-green-500 text-xs font-medium title-font mt-2"></h3>
                                        <h2 class="h-4 w-48 bg-gray-600 animate-pulse text-lg text-gray-300 font-medium title-font mt-2"></h2>
                                        <h3 className="h-2 w-20 bg-green-500 animate-pulse tracking-widest text-gray-300 text-xs font-medium title-font mb-4 mt-2"></h3>
                                        <p class="h-4 w-24 bg-gray-500 animate-pulse leading-relaxed text-base text-gray-400 mb-2"> </p>
                                        <p class="h-4 w-24 bg-gray-500 animate-pulse leading-relaxed text-base text-gray-400"> </p>
                                    </div>
                                </section>
                            )
                        })}
                        
                      </div>
                  </div>
              </div>
          </section >

      </>
  )
}

export default ArtistRelatedWorkSkeleton