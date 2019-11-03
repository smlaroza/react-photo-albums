import React, { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

function Pic(props) {
  const [Pic, setPic] = useState([])
  const [albumName, setAlbumName] = useState("")
  const albumId = props.match.params.id
  const [albums, setAlbums] = useState([])

  useEffect(() => {
    axios.get(`/albums/${albumId}?_embed=images`).then((resp) => {
      setPic(resp.data.images)
      setAlbumName(resp.data.name)
    })
  }, [albumId])

  useEffect(
    (e) => {
      axios.get("/albums").then((resp) => {
        setAlbums(resp.data)
      })
    },
    [albumName]
  )

  return (
    <div className="individualAlbum">
      <h1>{albumName}</h1>

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
      <div className="eachPhoto">
        {Pic.map((e) => (
          <div>
            <Link key={e.id} to={"/Pic/" + e.id}>
              <div className="picContainer">
                <div className="singlePhoto">
                  <img
                    className="actualimg"
                    height="350px"
                    width="350px"
                    src={e.url}
                  />
                </div>
              </div>
            </Link>
            <div className="pictureName">{e.name}</div>
          </div>
        ))}
      </div>
      <footer className="footertwo">&copy; Shey Laroza // Nov. 2019</footer>
    </div>
  )
}

export default Pic
