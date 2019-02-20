import React from 'react';
import Song from './Song';

class SongContainer extends React.Component{
  constructor(props){
    super(props);
    this.state={

    }
  }
  render(){
    return(
      <div>
        <Song songs={this.props.name}/>
      </div>
    )
  }
}

export default SongContainer;
