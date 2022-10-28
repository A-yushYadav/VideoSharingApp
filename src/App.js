import './App.css';
import youtube from './api/youtube';
import { Grid } from "@material-ui/core";
import SearchBar from './components/SearchBar';
import { useState } from 'react';
import VideoDetail from './components/VideoDetail';
import VideoList from  './components/VideoList';



function App() {
 const [videos, setVideos] = useState([]);
 const [selectedVideo, setSelectedVideos] = useState({ id:{}, snippet:{} });

   
  return (
    <div className="App">
      <Grid style={{ justifyContent: "center" }} container spacinf={10}>
        <Grid item xs={11}>
          <Grid container space={10}>

            <Grid item xs={12}>
              <SearchBar onSubmit = {handleSubmit} />
            </Grid>
            <Grid item xs={8}>
              <VideoDetail videos={selectedVideo}/>
            </Grid>
            <Grid item xs={4}>
             < VideoList  videos={videos} onVideoSelect={setSelectedVideos}/>
            </Grid>
          
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
  async function handleSubmit(searchItem) {
    const {data : {items:videos}} = await youtube.get("search",{
      params: {
        part:"snippet",
        maxResults:5,
        key:"AIzaSyBldCqK4VSk_a4igR0Ia40N5f58MTsVZVE",
        // "AIzaSyBldCqK4VSk_a4igR0Ia40N5f58MTsVZVE",
        q: searchItem,

      }
    });
    setVideos(videos);
    setSelectedVideos(videos[0]);
 
  }
}

export default App;
