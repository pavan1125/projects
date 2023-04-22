import React from "react"
import { useOutletContext } from "react-router-dom"

export default function HostVanPhotos(){
    const data=useOutletContext()
    return(
        <img style={{width:100,height:100}} src={data.imageUrl} alt="Car" />
    )
}