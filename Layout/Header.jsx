import React from "react"
import { NavLink,Link } from "react-router-dom"

export default function Header() {
    return (
        <header>
            <Link className="site-logo" to="/">#VanLife</Link>
            <nav>
                <NavLink className={({isActive}) => isActive ? "active-link" : null} to="/Host">Host</NavLink>
                <NavLink className={({isActive}) => isActive ? "active-link" : null} to="about">About</NavLink>
                <NavLink  className={({isActive}) => isActive ? "active-link" : null} to="vans">Vans</NavLink>
            </nav>
        </header>
    )
}