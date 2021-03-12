import React, {useRef, useState} from 'react'
import VideoFooter from './VideoFooter';
import VideoSidebar from './VideoSidebar'
import "./Video.css"

function Video({ url, channel, description, song, likes, messages, shares }) {
  const [play, setPlay] = useState(false);
  const vidRef = useRef(null)

  const onVidPress = () => {
    if (play){
      vidRef.current.pause()
      setPlay(false)
    } else {
      vidRef.current.play()
      setPlay(true)
    }
  }

  return (
    <div className="video">
        <video className="video-player"
        loop 
        onClick={onVidPress}
        ref={vidRef} 
        src={url}>
        </video>
        <VideoFooter channel={channel} description={description} song={song}  />
        <VideoSidebar likes={likes} messages={messages} shares={shares} />
    </div>
  )
}

export default Video
