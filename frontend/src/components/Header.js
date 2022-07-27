import { Fragment , useState} from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { Link, Routes, Route, useNavigate } from 'react-router-dom'
import AudioRecorder from './AudioRecorder'
import { useEffect } from 'react'
import AR_Backup from './AR_Backup'
import axios from 'axios'

const navigation = [
    { name: 'Product', href: '#' },
    { name: 'Features', href: '#' },
    { name: 'Marketplace', href: '#' },
    { name: 'Company', href: '#' },
]



const Header = () => {
    const navigate = useNavigate(); 
    const [search, setSearch] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        navigate(`/search/${search}`);
    }
    useEffect(() => {
        const player = document.getElementById("player");
        const recodingBtn = document.querySelector("#recodingBtn");

        const downloadLink = document.getElementById("download");

        // const handleSuccess = function (stream) {
        //   if (window.URL) {
        //     player.srcObject = stream;
        //   } else {
        //     player.src = stream;
        //   }
        // };

        // navigator.mediaDevices
        //   .getUserMedia({ audio: true, video: false })
        //   .then(handleSuccess);

        recodingBtn.addEventListener(
            "mousedown",
            () => {
                console.log("recoding..");
                startRecoding();
            },
            false
        );

        recodingBtn.addEventListener(
            "mouseup",
            () => {
                stopRecoding();
                console.log("recoding stopped.");
            },
            false
        );
        const sendAudioFile = async (blob) => {
            console.log("I N FUNCTION",blob)
         
            const response = await axios.post("http://localhost:8000/audio", {"data":blob})
            const data = await response.json();
            console.log(data);
        }

        var stream;
        var mediaRecorder;
        var recordedChunks = [];

        function startRecoding() {
            window.recordedChunks = [];
            navigator.mediaDevices
                .getUserMedia({ audio: true, video: false })
                .then((stream) => {
                    window.stream = stream;
                    const options = { mimeType: "audio/webm" };
                    mediaRecorder = new MediaRecorder(stream, options);

                    mediaRecorder.ondataavailable = (e) => {
                        window.recordedChunks.push(e.data);
                        console.log(window.recordedChunks)
                    };

                    mediaRecorder.onstop = function (e) {
                        var blob = new Blob(window.recordedChunks, { 'type': 'audio/mp3; codecs=opus' });
                        // sendAudioFile(blob);
                        var blobURL = window.URL.createObjectURL(blob);
                        var reader = new FileReader();
                        console.log("URL", reader.readAsDataURL(blob))
                        reader.onloadend = function () {
                            var base64data = reader.result;
                            sendAudioFile(base64data)
                        }
                        
                        window.recordedChunks = [];
                        // socket.emit('audio-blob', blob);
                        window.player.src = blobURL;
                    }

                    // mediaRecorder.addEventListener("stop", function () {
                    // 	downloadLink.href = URL.createObjectURL(new Blob(recordedChunks));
                    // 	downloadLink.download = "acetest.wav";
                    // });

                    mediaRecorder.start();
                    window.mediaRecorder = mediaRecorder;
                });
        };

        function stopRecoding() {
            try {
                window.mediaRecorder.stop();
                window.stream.getTracks().forEach(function (track) {
                    track.stop();
                });
            } catch (error) {
                console.log(error);
            }
        };
    }, [])
    

  return (

      <>
   
          <section className="bg-gradient-to-b from-black to-gray-900 w-full px-3 antialiased bg-gray-900 lg:px-6 " data-tails-scripts="//unpkg.com/alpinejs">
                <div className="mx-auto max-w-7xl">
                
                    <div className="container py-32 mx-auto text-center sm:px-4">
                      <h1 className="mb-6 text-5xl font-extrabold leading-none max-w-5xl mx-auto tracking-normal text-white sm:text-6xl md:text-6xl lg:text-7xl md:tracking-tight">
                          {" "}
                          The{" "}
                          <span className="w-full text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-blue-500 to-purple-700 lg:inline">
                              Number One Source
                          </span>{" "}
                          for
                          <br className="lg:block hidden" /> all your design needs.{" "}
                      </h1>
                        
                        <div className="max-w-lg mx-auto mt-5 text-sm text-center text-green-500 md:mt-12 sm:text-base md:max-w-xl md:text-lg xl:text-xl">If you are ready to change the way you design websites, then you'll want to use our block builder to make it fun and easy!</div>
                        <div className="relative flex items-center max-w-md mx-auto mt-4 overflow-hidden text-center rounded-full">
                          <AudioRecorder />
    
                          <input value={search} onChange={e => setSearch(e.target.value)} type="search" id="default-search" placeholder="Enter the lyric . . . ." className="w-full h-12 px-6 py-2 font-medium text-green-500 focus:outline-none" />
                            <span className="relative top-0 right-0 block">
                                <button onClick={submitHandler}type="submit" className="inline-flex items-center w-32 h-12 px-8 text-base font-bold leading-6 text-white transition duration-150 ease-in-out bg-green-300 border border-transparent hover:bg-green-600 focus:outline-none active:bg-green-600">
                                    Search
                                </button>
                                
                            </span>
                          
                        </div>
                        <div className="mt-8 text-sm text-green-200">Note: Recording must be only for the duration of lesser than 4 seconds</div>
                    </div>
                    
                </div >
            </section >

      </>
      

  )
                                      }
                                      

export default Header