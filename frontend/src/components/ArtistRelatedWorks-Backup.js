import React from 'react'

const ArtistRelatedWorks = ({data}) => {
    const {albums} = data
    const {songs} = data
    

    const albumsList = [];
    Object.keys(albums).forEach(key => albumsList.push({
        name: key,
        rating: albums[key]
    }));
    albumsList.reverse()
    const aList=[]
    for(let i=0;i<albumsList.length;i++){
        
        if(i===0){
            aList.push(albumsList[i])
        }
        else{
            if(aList[aList.length-1].rating.attributes.name===albumsList[i].rating.attributes.name){
                continue
            }else{
                aList.push(albumsList[i])
            }
        }  
    }

    console.log(aList);

  return (
      <section className="text-gray-600 body-font">
          <div className="container px-28 py-24 mx-auto">
              <div className="flex flex-col text-center w-full mb-20">
                  <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                      ARTIST RELATED WORKS
                  </h1>
                  <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                      Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
                      gentrify, subway tile poke farm-to-table. Franzen you probably haven't
                      heard of them man bun deep jianbing selfies heirloom.
                  </p>
              </div>
              <div className="flex flex-wrap -m-4">
                  {aList && aList.map((album,index)=>{
                    return (
                        <div key={index} className="lg:w-1/3 sm:w-1/2 p-4">
                            <div className="flex relative">
                                <img
                                    alt="gallery"
                                    className="absolute inset-0 w-80 h-60 object-cover object-center"
                                    src={album.rating.attributes.artwork.url.replace("{w}x{h}", "300x300")}
                                />
                                <div className="px-8 py-10 relative z-10 w-80 h-60 border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                    <h2 className="tracking-widest text-sm title-font font-medium text-green-500 mb-1">
                                        {album.rating.attributes.recordLabel}
                                    </h2>
                                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                        {album.rating.attributes.name}
                                    </h1>
                                    {/* <p className="leading-relaxed">
                                        Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
                                        microdosing tousled waistcoat.
                                    </p> */}
                                </div>
                                </div>
                        </div>
                    )
                  })}
                  
                  
                  
                  
              </div>
          </div>
      </section>

  )
}

export default ArtistRelatedWorks