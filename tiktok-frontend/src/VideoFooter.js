import React from 'react'
import './VideoFooter.css';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import Ticker from 'react-ticker';

function VideoFooter({channel, description, song}) {
  return (
    <div className='videofooter'>
        <div className='videofooter__text'>
            <h3>@{channel}</h3>
            <p>{description}</p>
            <div className='videofooter__ticker'>
                <MusicNoteIcon  className='videofooter__icon'/>

                <Ticker mode='smooth'>
                    {({index}) => (
                        <>
                            <p>{song}</p>
                        </>
                    )}
                </Ticker>
            </div>
        </div>
        <img className='videofooter__record' src='https://static.thenounproject.com/png/934821-200.png'/>
    </div>
  )
}

export default VideoFooter