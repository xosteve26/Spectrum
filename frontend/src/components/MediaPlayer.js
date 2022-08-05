import ReactAudioPlayer from 'react-audio-player';


const MediaPlayer = ({url}) => {
  return (

    <ReactAudioPlayer
        src={url}
        controls
        preload='auto'
        style={{"width": "100%"}}

    />

  )
}

export default MediaPlayer