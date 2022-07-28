import React from 'react'

const RelatedWorksSkeleton = () => {
    const skeleton=[1,2,3,4,5,6,7,8]
  return (
      <>
          <section className="text-gray-600 body-font bg-gray-900">
              <div className="container px-28 py-24 mx-auto">
                  <div className="flex flex-wrap w-full mb-20">
                      <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-300">
                              RELATED WORKS
                          </h1>
                          <div className="animate-pulse h-1 w-20 bg-green-500 rounded" />
                      </div>
                      <p className="bg-gray-600 animate-pulse lg:w-1/2 w-full leading-relaxed">
                          
                      </p>
                  </div>
                  <div className="flex flex-wrap -m-4">

                        {skeleton.map((album,index)=>{
                            return(

                                <div className="xl:w-1/4 md:w-1/2 p-4">
                                    <div className="bg-gray-800 animate-pulse p-6 rounded-lg">


                                        <div className='bg-gray-600 animate-pulse h-40 rounded w-full object-cover object-center mb-6'></div>
                                        <h3 className="bg-green-400 animate-pulse tracking-widest text-green-500 text-xs font-medium title-font">

                                        </h3>
                                        <h2 className="text-lg text-gray-300 font-medium title-font mb-4">

                                        </h2>
                                        <div className="relative flex items-center justify-center space-x-3">
                                            <div className='rounded-full h-10 w-10 bg-green-400 animate-pulse mr-2'></div>
                                            <div className='rounded-full h-10 w-10 bg-green-400 animate-pulse'></div>

                                        </div>
                                    </div>


                                </div>

                            )
                        })}
                     
                              

     
                  </div>
              </div>
          </section>

      </>
  )
}

export default RelatedWorksSkeleton