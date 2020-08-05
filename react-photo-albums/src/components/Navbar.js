import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default props => {
    const [albums, setAlbums] = useState([])
    
    function getAlbums() {
        axios.get("/albums").then((resp) => {
            setAlbums(resp.data)
          })
    }

    useEffect(() => {
        getAlbums()
    }, [])
    return (
        <div className="navBar">
        <div className="home">
          <Link to="">All Albums</Link>
        </div>
        {albums.map((e) => (
          <p>
            <Link key={"albums" + albums.name} to={"/Pic/" + e.id}>
              <div className="albumName">{e.name}</div>
            </Link>
          </p>
        ))}
      </div>
    )
}