import React from 'react';

const Playlist = props => {


  return(
    <div onClick={props.click} className={props.selection}>
    {props.names}
    </div>
  )
}

export default Playlist
