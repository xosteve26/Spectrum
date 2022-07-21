import React from 'react'
import { useState, useEffect } from 'react'
import { useParams, Link} from "react-router-dom";
import axios from 'axios'

const SearchScreen = () => {
    const { id: term } = useParams();
    const [tracks,setTracks]=useState(null)
    const [artists,setArtists]=useState(null)

    useEffect(() => {
        async function fetchData(){
            try {
                const req = await axios.get('http://localhost:8000/search', { params: { term: term } })
                const data=req.data;
                setTracks(data.tracks)
                setArtists(data.artists)
                console.log(req)
            }
            catch (err) {
                console.log(err)
            }
        }
        fetchData()
    }, [])
   
    console.log("tracks",tracks,artists)

  return (
      <>
          
          <section className="relative py-20 overflow-hidden bg-white">
              <span className="absolute top-0 right-0 flex flex-col items-end mt-0 -mr-16 opacity-60">
                  <span className="container hidden w-screen h-32 max-w-xs mt-20 transform rounded-full rounded-r-none md:block md:max-w-xs lg:max-w-lg 2xl:max-w-3xl bg-blue-50" />
              </span>
              <span className="absolute bottom-0 left-0"> </span>
              <div className="relative px-16 mx-auto max-w-7xl">
                  <p className="font-medium tracking-wide text-blue-500 uppercase">
                      OUR TEAM
                  </p>
                  <h2 className="relative max-w-lg mt-5 mb-10 text-4xl font-semibold leading-tight lg:text-5xl">
                      An incredible team of <br />
                      amazing individuals
                  </h2>
                  <div className="grid w-full grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-4">
                      
                        {tracks && tracks.map((track,index)=>{
                            console.log("key",track.track.key)
                            return(
                               
                                    <div key={index} className="flex flex-col items-center justify-center col-span-1">
                                    <Link to={`/song/${track.track.key}`} state={{ key: track.track.key }}>
                                        <div className="relative p-5" >
                                            <div className="absolute z-10 w-full h-full -mt-5 -ml-5 rounded-full rounded-tr-none bg-blue-50" />
                                            <img
                                                className="relative z-20 w-full rounded-full"
                                                src={track.track.images.coverart}
                                            />
                                        </div>
                                    </Link>
                                 
                                        <div className="mt-3 space-y-2 text-center">
                                            <div className="space-y-1 text-lg font-medium leading-6">
                                                <h3>{track.track.subtitle}</h3>
                                                <p className="text-blue-600">{track.track.title}</p>
                                            </div>
                                            <div className="relative flex items-center justify-center space-x-3">
                                                <a target="_blank" href={track.track.hub.options[0].actions[0].uri} className="text-gray-300 hover:text-gray-400">
                                                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAC80lEQVRoge2Zz2sTQRTHP62liO3mIlgKrQeJQVBsRDyIVZBY/4Se/Ds8WHvxT1CQWj1Lf3ir3qpFz4r1UFsQfyFIK62QpAhiIR7eLBs3m+zM7Owmwn5h2CTz3rzvN++9yTCBHDlyuMAU8BDYAvaBRspjH9gE5oGKCwEl4GUGxOPGGlC0FXEF+KkW2gZuARPAkO2CBhgCysCMit0A9oBJ04VKBCIWgGF3HI3hAYsEYowy45fTAtDnnJo5+oAlhNMLXacpgnLqZibC8IAdhFvLBtAf4TCtnneR3aNXUAfuqdfTnQx9bCGqz6ZE6BhwHbgJPAY2gF/AHQ3fsuK2GZ6Iqv8akkaPZBnpRxqzHBqjbex/A4dj1vQUvzpQaJ6IEtLoMBeHEeSbvohkNGqrrgHvgPWm52uDmJH8XAt5BVxuev+NfwmvA5+aYtjE1Lb1f01tcECwqxw18DOJGWk7YBBMB4fU83kHmwHgFNIvE+qZGK6FhOEhp4TTwHk1zgFHXAdKS8gyQvgErbXcAD4Cbwn6ZyVpQNfNHq7dP8AH4I0aG4iAvQQxM2l23/cGcAb9jCdu9qSLuvJNLCTqrPVfIhfSa8iFOMR4WgtnuWuNAc8M/bq+/Y4gd2Ofm+zCwyk/WyHjHXxHge+0Ev8BPDKMmaqQuBJ5QnADUgrNDaq5A81YzoTYlEhNfR7V2BfU3Bcdchr8tAxtS6SqPh+LmFtRc/d1yMXw0za0LRHf7ykiZhDJhC+iChzXIRfDT9vQtkROIkf3qDKsAtd0iGnw0zZMUiJFJDNVJGtfla1uJnT4aRu6LBFbaAvxyyfq3tdlidjAU7FqOsZxV6auSsQG/pXpex3jeWU8kyYjS8wi3OZ0jCvKeBtJZa+ggPxeNYCruk5rymGR3vmjZxnhtGriWCRo6iW6m5kCgYhd5K7MCJMEYnaA28ilWxb/Yg2rWLME5bQLXLJdsIgcR9odDrMaq1hkIgoV4AGy7dUzIF5HbiXnMGjsHDlytMdfTE2Vbk5cUtkAAAAASUVORK5CYII=" />
                                                </a>
                                                <a target="_blank" href={track.track.url} className="text-gray-300 hover:text-gray-400">
                                                    <img src="data:image/png;base64,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" />
                                                </a>
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

export default SearchScreen