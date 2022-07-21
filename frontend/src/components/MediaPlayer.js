// import AudioPlayer from 'react-h5-audio-player';
// import 'react-h5-audio-player/lib/styles.css';

import ReactAudioPlayer from 'react-audio-player';

const MediaPlayer = () => {
  return (
    
    
    <ReactAudioPlayer
        src="https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/1b/aa/25/1baa2573-8d81-8daa-08dd-b68c6be010a0/mzaf_595184799298784750.plus.aac.ep.m4a"
        controls
        preload='auto'
    />

  )
}

export default MediaPlayer