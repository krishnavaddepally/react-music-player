import React from 'react';
import PlaylistCollection from './PlaylistCollection';
import SongContainer from './SongContainer';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      selectPlaylistId:null
    }
    this.selectPlaylistTrigger=this.selectPlaylistTrigger.bind(this)
  }
  selectPlaylistTrigger(id){
    console.log("playlisttrigger was fired")
    this.setState({selectPlaylistId: id})
    console.log(`${this.selectPlaylistId}`)
  }

render(){
  let playItems=this.props.data.playlists.map(element=>{
    let handleClick=()=>{
      this.selectPlaylistTrigger(element.id)
    }

  let selected
  if(element.id === this.state.selectPlaylistId){
    selected="selected"
  }

    return(
      <PlaylistCollection
        key={element.id}
        name={element.name}
        handleClick={handleClick}
        className={selected}
      />
    )
  })

  let songItems=this.props.data.songs.map(element=>{
    let handleClick=()=>{
      this.selectPlaylistTrigger(element:id)
    }
    let selected
    if(element.id === this.state.selectPlaylistId){
      selected="selected"
    }
    return(
      <SongContainer
        key={element.id}
        name={element.name}
        handleClick={handleClick}
        className={selected}

      />)


  })

  return(
    <div>
    <h1>Playlists</h1>
    {playItems}
    <h1>Songs</h1>
    {songItems}

    </div>
  )
}


}
export default App;
