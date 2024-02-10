import React, {useState} from 'react'

function GifSearch({setGifs}) {

    const [search, setSearch] = useState("")

    function handleSearch(e) {
        setSearch(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        fetch(`https://api.giphy.com/v1/gifs/search?q=${search}&api_key=YDonlMtyDJZD2asoELhOHfFIiVAOH1Kn&rating=g`)
        .then(r => r.json())
        .then(data => setGifs([data.data[0], data.data[1], data.data[2]]))
        .catch(error => console.log(error))
    }

    return(
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                name="search" 
                placeholder="Search for gifs" 
                onChange={handleSearch} 
                value={search}>
            </input>
            <button 
                type="submit"
                name="search">
                Search
            </button>
        </form>
    )
}

export default GifSearch