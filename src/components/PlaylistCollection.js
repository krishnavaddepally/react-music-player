import React from 'react';
import Playlist from './Playlist';

class PlaylistCollection extends React.Component{
  constructor(props){
    super(props);
    this.state={
    }
  }

  render(){

    return(
      <div>
        <Playlist names={this.props.name}
        click={this.props.handleClick}
        selection={this.props.className}
        />
      </div>
    )
  }
}




export default PlaylistCollection;
