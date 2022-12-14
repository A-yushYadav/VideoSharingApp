import React from "react";
import { Grid , Paper , Typography } from "@material-ui/core";

const VideoItem =({video , onVideoSelect})=>{
return(
    <Grid item xs={12}>
        <Paper style={{display:"flex",alignItem:"center",cursor:"pointer"}} onClick={ ()=>onVideoSelect(video)}>
            <img  style={{marginRight:"20px"}}   alt="thumbnail" src={video.snippet.thumbnail.medium.url } />
            <Typography variant="subtitle1">
                <b>{video.snippet.title}</b>
            </Typography>
        </Paper>
    </Grid>
);
}

export default VideoItem;