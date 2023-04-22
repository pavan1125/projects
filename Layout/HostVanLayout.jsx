import React from "react"
import { Outlet,NavLink } from "react-router-dom"

export default function HostVanLayout(){
     return(
        <>
          <Outlet />
          <nav>
            <NavLink to="/host/Vans/:id">details</NavLink>
            <NavLink to="/host/Vans/:id/pricing">pricing</NavLink>
            <NavLink to="/host/Vans/:id/photos">photos</NavLink>
          </nav>
          <Outlet/>
        </>
           
     )
}