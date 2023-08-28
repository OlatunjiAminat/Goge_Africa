import React from 'react'
import PropTypes from "prop-types"

function YoutubeVideo({ embedId }) {
  return (
    <div>
        <div className='hidden md:block bg-gray-500'>
            <iframe width="260" height="315" src={`https://player.vimeo.com/external/399270571.sd.mp4?s=d2445df8d2b167e5a7f6e3a271cc89cd92810855&profile_id=164&oauth2_token_id=57447761${embedId}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; " allowFullScreen controls className='lg:w-[570px] lg:h-[450px] xl:w-[620px]'/>
        </div>
    </div>
  )
}
YoutubeVideo.propTypes = {
    embedId: PropTypes.string.isRequired
  };

export default YoutubeVideo