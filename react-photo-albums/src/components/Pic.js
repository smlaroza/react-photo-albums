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


  return (
    <div className="individualAlbum">
      <h1>{albumName}</h1>
      <div className="eachPhoto">
        {Pic.map((e) => (
          <div>
            <Link key={e.id} to={"/single/" + e.id}>
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
    </div>
  )
}

export default Pic
