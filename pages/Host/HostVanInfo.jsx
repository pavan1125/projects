import React from "react"
import { useOutletContext } from "react-router-dom"

export default function HostVanInfo(){

    let data=useOutletContext()
    return(<>
           
            <p><b>name:</b>{data.name}</p>
            <p><b>category:</b>{data.type}</p>
            <p><b>description:</b>{data.description}</p>
            <p><b>visibitlity:</b>public</p>
           
           
            
        </>
    )
}