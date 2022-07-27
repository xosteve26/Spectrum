import React from 'react'

const AudioRecorder = () => {
  return (
      <div className="w-full h-full font-medium text-green-500 focus:outline-none">
          <div
              id="recodingBtn"
          >
              <img className="transition duration-700 ease-in-out w-12 h-12 flex border-0 p-0 m-2  rounded-full cursor-pointer border-red-100 active:border-4 active:border-red-400" src="/3293611.png" alt="" />
          </div>
          {/* <audio id="player" controls /> */}
      </div>
  )
}

export default AudioRecorder