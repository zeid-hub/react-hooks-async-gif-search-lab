import React, { useState, useEffect} from "react";
import GifList from "./GifList";
import GifSearch from './GifSearch'

function GifListContainer (){
    
    const [gifs, setGifs] = useState([])

    useEffect(() => {
        fetch('https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=YDonlMtyDJZD2asoELhOHfFIiVAOH1Kn&rating=g')
        .then(r => r.json())
        .then(data => setGifs([data.data[0], data.data[1], data.data[2]]))
    }, [])

    return(
        <div>
          <GifSearch setGifs={setGifs}/>
        <br></br>
        <GifList gifs={gifs}/>
        </div>
    ) 
};

export default GifListContainer;