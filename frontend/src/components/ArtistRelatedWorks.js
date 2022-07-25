import React from 'react'

const ArtistRelatedWorks = ({data}) => {
    const { albums } = data
    const { songs } = data


    const albumsList = [];
    Object.keys(albums).forEach(key => albumsList.push({
        name: key,
        rating: albums[key]
    }));
    albumsList.reverse()
    const aList = []
    for (let i = 0; i < albumsList.length; i++) {

        if (i === 0) {
            aList.push(albumsList[i])
        }
        else {
            if (aList[aList.length - 1].rating.attributes.name === albumsList[i].rating.attributes.name) {
                continue
            } else {
                aList.push(albumsList[i])
            }
        }
    }

    console.log(aList);
  return (
    <>
          <section className="text-gray-600 body-font">
              <div className="container px-28 py-24 mx-auto">
                  <div class="flex flex-wrap w-full mb-20 flex-col items-center text-center">
                      <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Artist's Related Works</h1>
                      <div className="h-1 w-72 bg-green-500 rounded" />
                      <p class="lg:w-1/2 w-full leading-relaxed text-gray-500">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table.</p>
                  </div>
                  <div className="flex flex-wrap w-full mb-10">
          <div class="flex overflow-x-auto space-x-8">
            {aList && aList.map((album, index) => {
                return (
                    <section class="flex-shrink-0 rounded-full">
                        <div class="bg-gray-100 p-6 rounded-lg">
                            <a target="_blank" href={album.rating.attributes.url}><img class="h-full rounded w-auto object-cover object-center mb-6" src={album.rating.attributes.artwork.url.replace("{w}x{h}", "300x300")} alt="content" /></a>
                            <h3 class="tracking-widest text-green-500 text-xs font-medium title-font">{album.rating.attributes.recordLabel}</h3>
                            <h2 class=" text-lg text-gray-900 font-medium title-font">{album.rating.attributes.name}</h2>
                            <h3 className="tracking-widest text-black-500 text-xs font-medium title-font mb-4">{album.rating.attributes.genreNames[0]}</h3>
                            <p class="leading-relaxed text-base">Track Count: {album.rating.attributes.trackCount}</p>
                            <p class="leading-relaxed text-base">Release Date: {album.rating.attributes.releaseDate}</p>
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

export default ArtistRelatedWorks