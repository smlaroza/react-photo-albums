import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default props => {
    const [imageUrl, setImageUrl] = useState("")
    const [name, setName] = useState("")

    function getImage() {
        axios.get("/images/" + props.match.params.id).then(resp => {
            if (resp.data.hasOwnProperty("url")) {
                setImageUrl(resp.data.url)
                setName(resp.data.name)
                console.log("Set")
            }
        })
    }

    useEffect(() => {
        getImage()
    }, [])

    return (
        <div id="singleViewWrapper" style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
            <h1>{name}</h1>
            <img src={imageUrl} style={{width: "600px", height: "600px"}}/>
        </div>
    )
}