import React from 'react';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import Ticker from 'react-ticker';
import './VideoFooter.css'

function VideoFooter({channel, description, song}) {


  return (
    <div className="video-footer">
      <div className="vid-footer-txt">
        <h3>{channel}</h3>
        <p>{description}</p>
        <div className="vid-footer-ticker">
          <MusicNoteIcon className="vid-footer-icon"/>
          <Ticker mode="smooth">
            {({index}) => (
              <div>
                <p>{song}</p>
              </div>
            )}
          </Ticker>
        </div>
      </div>
      <img className="vid-footer-record" src="https://static.thenounproject.com/png/934821-200.png" alt=""/>
    </div>
  );
}

export default VideoFooter
