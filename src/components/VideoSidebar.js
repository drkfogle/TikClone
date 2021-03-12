import React, {useState}  from 'react';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import MessageIcon from '@material-ui/icons/Message';
import ShareIcon from '@material-ui/icons/Share';
import './VideoSidebar.css';

function VideoSidebar({ likes, messages, shares }) {

  const [liked, setLiked] = useState(false);

  return (
    <div className="vidSidebar">
      <div className="vidSidebar-option">
        {liked ? (
          <FavoriteIcon fontSize="large" onClick={(e) => setLiked(false)}/>
        ) : (
          <FavoriteBorderIcon fontSize="large" onClick={(e) => setLiked(true)}  />
        )}
        <p>{liked ? likes + 1 : likes}</p>
      </div>
      <div className="vidSidebar-option">
        <MessageIcon/>
        <p>{messages}</p>
      </div>
      <div className="vidSidebar-option">
        <ShareIcon/>
        <p>{shares}</p>
      </div>
    </div>
  )
}

export default VideoSidebar
