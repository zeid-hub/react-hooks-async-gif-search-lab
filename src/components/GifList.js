import React from 'react'

function GifList({gifs}) {

    const gifComps = gifs.map(gif => <li key={gif.id}><img src={gif.images.original.url} alt="gif"></img></li>)

    return(
        <div>
            <ul>
                {gifComps}
            </ul>
        </div>
    )
}

export default GifList