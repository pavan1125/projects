import React from "react"
import { useOutletContext } from "react-router-dom"

export default function HostVanPrice(){
    let data=useOutletContext()
    return(
        <h1>${data.price}/day</h1>
    )
}