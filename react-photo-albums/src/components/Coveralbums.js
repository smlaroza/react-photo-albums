import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import "../styles/styles.css"

function Coveralbums(props) {
  const [data, setData] = useState([])
  const [albumId, setAlbumId] = useState("")
  const id = props.match.params.id

  useEffect(() => {
    axios("http://localhost:3001/Albums").then((resp) => {
      setData(resp.data)
    })
  }, [])

  return (
    <div className="container">
      <h1>Women's And Men's Fashion Albums</h1>

      <div className="allAlbums">
        {data.map((e) => (
          <Link key={e.id} to={"/Pic/" + e.id}>
            <div className="frontcvr">
              <div className="albumCover">
                {" "}
                <img
                  className="allAlbumsImg"
                  height="350px"
                  width="350px"
                  src={e.coverPic}
                />
              </div>
              <div className="albumName">{e.name}</div>
            </div>
          </Link>
        ))}
      </div>
      <footer className="footer">&copy; Shey Laroza // Nov. 2019</footer>
    </div>
  )
}

export default Coveralbums
