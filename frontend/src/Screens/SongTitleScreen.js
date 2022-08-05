import React from 'react'
import { useState, useEffect } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import MediaPlayer from '../components/MediaPlayer'
import RelatedWorks from '../components/RelatedWorks';
import axios from 'axios'
import Lyrics from '../components/Lyrics';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import ArtistSection from '../components/ArtistSection';
import ArtistRelatedWorks from '../components/ArtistRelatedWorks';
import RelatedWorksSkeleton from '../components/RelatedWorksSkeleton';
import ArtistRelatedWorkSkeleton from '../components/ArtistRelatedWorkSkeleton';
import { useNavigate } from 'react-router-dom';

const SongTitleScreen = () => {
    const navigate=useNavigate()
    const { id: key } = useParams();

    const [data, setData] = useState(key ? key : null)
    console.log(data)
    const [songData, setSongData] = useState(null)
    const [chartData,setChartData] = useState(null)
    const [artistData, setArtistData] = useState(null)
    const [totalSong, setTotalSong] = useState(0)
    const [totalAlbums, setTotalAlbums] = useState(0)

    useEffect(() => {
        if (sessionStorage.getItem("songData") && sessionStorage.getItem("chartData") && sessionStorage.getItem("artistData") && (!songData && !chartData && !artistData)) {
            setSongData(JSON.parse(sessionStorage.getItem("songData")))
            setChartData(JSON.parse(sessionStorage.getItem("chartData")))
            setArtistData(JSON.parse(sessionStorage.getItem("artistData")))
            setTotalSong(JSON.parse(sessionStorage.getItem("totalSongs")))
            setTotalAlbums(JSON.parse(sessionStorage.getItem("totalAlbums")))
            console.log("USING CACHE")
        }
        
        async function fetchSongData() {
            const response = await axios.get(`http://localhost:8000/song/`, { params: { songid: key } })
            setSongData(response.data)
            sessionStorage.setItem("songData", JSON.stringify(response.data)) 
        }

        async function fetchArtistData() {
            const response = await axios.get(`http://localhost:8000/artist/artist-info`, { params: { artistid: songData.artists[0].adamid } })
            setArtistData(response.data)
            const {songs}=response.data
            const {albums} = response.data
            var lenSong=0;
            for (var song in songs){
                lenSong++;

            }
            setTotalSong(lenSong)
            sessionStorage.setItem("totalSongs",lenSong)

            var lenAlbum=0;
            for (var album in albums){
                lenAlbum++;
            }
            setTotalAlbums(lenAlbum)
            sessionStorage.setItem("totalAlbums",lenAlbum)
            sessionStorage.setItem("artistData", JSON.stringify(response.data))
        }

        async function fetchChartData () {
            const response = await axios.get(`http://localhost:8000/charts/list/`, { params: { genre: songData.genres.primary } })
            setChartData(response.data)
            sessionStorage.setItem("chartData", JSON.stringify(response.data))
        }
        
        if (!songData) {
            console.log("FETCHING Song data")
            fetchSongData()
        }

        if (!chartData && songData) {
            console.log("FETCHING Chart data")
            fetchChartData()
        }

        if (!artistData && songData) {
            console.log("FETCHING Artist data")
            fetchArtistData()
            
        }
        
      
    }, [songData, chartData, artistData])
    console.log(songData)
    console.log("ARTIST INFO",artistData)
    console.log("chartData", chartData)

    const savedHandler=()=>{
        try{

            const token = sessionStorage.getItem('token')
            const headers = {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            }

            const response = axios.post(`http://localhost:8000/users/save-song`, { song_id: key, userID: sessionStorage.getItem("userId"), artist_name: songData.subtitle, track_name: songData.title, rating: songData.hub.explicit, genre: songData.genres.primary },{headers})
            console.log(response)
            navigate(`/dashboard`)
        }
        catch(err){
            console.log(err.message)
        }
        
        
    }

    return (
        <>
            {songData && artistData && chartData&&
                <>
                <section className="text-gray-300 body-font overflow-hidden bg-gradient-to-b from-black to-gray-900">
                    <ArtistSection image={songData && songData.images.background} artistName={songData && songData.subtitle} tSongs={totalSong} tAlbums={totalAlbums}/>

                        <div className="container px-5 py-24 mx-auto">
                            
                            <div className="lg:w-4/5 mx-auto flex flex-wrap">
                                
                                <img
                                    alt="album-art"
                                    className="lg:w-1/3 w-full lg:h-auto h-64 object-cover object-center rounded"
                                    src={songData.images.coverart}
                                />
                                <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                                    <h2 className="text-sm title-font text-green-500 tracking-widest">
                                        {songData.subtitle.toUpperCase()}
                                    </h2>

                                    <div className="flex mb-4">
                                        <span className="flex items-center ">

                                            <h1 className="text-gray-300 text-3xl title-font font-medium mb-1">
                                                {songData.title}
                                            </h1>
                                        </span>

                                        <span className="flex ml-3 pl-3 py-2 border-l-2 border-green-500 space-x-2s">
                                            {/* {songData.sections[0].metadata[0].text &&
                                        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                                            {songData.sections[0].metadata[0].text}
                                        </h1> 
                                    } */}
                                            {songData.hub.explicit ?
                                                <><img src="/e-alphabet.svg" className='bg-red-500 w-6 h-6 focus:outline-none ml-3 rounded-full' /></>
                                                :
                                                <><img src="/c-alphabet.svg" className='bg-white w-6 h-6 focus:outline-none ml-3 rounded-full' /> </>
                                            }

                                        </span>
                                    </div>
                                    <div className="flex mb-4">
                                        <span className="flex items-center">

                                            Genre:<span className="text-gray-300 ml-1">{songData.genres.primary}</span>
                                        </span>
                                        <span className="flex ml-1 pl-3 py-2  space-x-2s">•

                                            {songData.sections[0].metadata[0].text &&
                                                <span className="ml-1 text-gray-300 ">
                                                    Album:  {songData.sections[0].metadata[0].text}
                                                </span>
                                            }

                                        

                                        </span>
                                        <span className="flex ml-1 pl-3 py-2  space-x-2s">•

                                            {songData.sections[0].metadata[1].text &&
                                                <span className='ml-1'>Label: {songData.sections[0].metadata[1].text}</span>
                                            }

                                        </span>
                                    </div>
                                    <p className="leading-relaxed">
                                        <MediaPlayer url={songData.hub.actions[1].uri}/>
                                        {/* <MVideo /> */}
                                    </p>
                                    <div className="flex mt-6 items-center pb-5 border-b-2 border-green-500 mb-5">
                                        <div className="flex">
                                            <span className="mr-3">Streaming Providers:</span>
                                            <a target="_blank" href={songData.hub.options[0].actions[0].uri}><img src="/apple-music.svg" className="border-2 border-gray-800 rounded-full w-8 h-8 focus:outline-none" /></a>
                                        <a target="_blank" href={`https://open.spotify.com/search/${songData.hub.providers[0].actions[0].uri.slice(15)}`}><img src="/spotify.svg" className="border-2 border-gray-800 rounded-full w-8 h-8 focus:outline-none ml-3" /></a>
                                        <a target="_blank" href={songData.url}><img src="/shazam.svg" className="border-2 border-gray-800 rounded-full w-8 h-8 focus:outline-none ml-3" /></a>

                                        </div>
                                       
                                    </div>
                                    <div className="flex">
                                        <button className=" text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded">
                                            <a href="#lyrics">View Lyrics</a>
                                        </button>

                                        <a target="_blank" href={songData.sections[2].youtubeurl.actions[0].uri}><button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                                            <img src="/youtube-round-color.svg" />

                                        </button></a>

                                    <img src="/like-heart-round.svg" onClick={savedHandler} className='hover:bg-red-500 cursor-pointer rounded-full w-10 h-10  p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4 bg-white'  />

                                    </div>
                                </div>

                            </div>

                        </div>
                    </section>
                    
                    {songData && <Lyrics lyrics={songData.sections[1]} writers={songData.sections[1].footer} meta={songData} />}
                    {artistData ? <ArtistRelatedWorks data={artistData} /> : <ArtistRelatedWorkSkeleton />}
                    {chartData ? <RelatedWorks charts={chartData} /> : <RelatedWorksSkeleton />}
              
                    
      

                </>

            }

        </>


    )
}

export default SongTitleScreen