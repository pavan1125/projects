import React, { useEffect } from "react"
import { Link,useSearchParams } from "react-router-dom"
import { getVans } from "../api"
export default function Vans() {
     
    const [vans,setVans]=React.useState([])
    const [searchParams, setSearchParams] = useSearchParams()
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState(null)
    let filtered=searchParams.get("type")
    React.useEffect(() => {
        async function loadVans() {
            setLoading(true)
            try {
                const data = await getVans()
                setVans(data)
            } catch (err) {
                setError(err)
            } finally {
                setLoading(false)
            }
        }

        loadVans()
    }, [])

    let filteredItems=filtered?vans.filter(item=>item.type.toLowerCase()===filtered.toLowerCase()):vans
   
    const vanElements = filteredItems.map(van => (
        <div key={van.id} className="van-tile">
            <Link to={`${van.id}`}
            
            state={{ search: `?${searchParams.toString()}` ,type:filtered}}
              >
                
                <img src={van.imageUrl} />
                <div className="van-info">
                    <h3>{van.name}</h3>
                    <p>${van.price}<span>/day</span></p>
                </div>
                <i className={`van-type ${van.type} selected`}>{van.type}</i>
            </Link>
        </div>
    ))
  
    function handleFilterChange(key, value) {
        setSearchParams(prevParams => {
            if (value === null) {
                prevParams.delete(key)
            } else {
                prevParams.set(key, value)
            }
            return prevParams
        })
    }

    if (loading) {
        return <h1>Loading...</h1>
    }
    if (error) {
        return <h1>There was an error: {error.message}</h1>
    }
    return (
        <div className="van-list-container">
           <div className="van-list-filter-buttons">
           <button
                    onClick={() => handleFilterChange("type", "simple")}
                    className={
                        `van-type simple ${filtered === "simple" ? "selected" : ""}`
                    }
                >Simple</button>
                <button
                    onClick={() => handleFilterChange("type", "luxury")}
                    className={
                        `van-type luxury ${filtered === "luxury" ? "selected" : ""}`
                    }
                >Luxury</button>
                <button
                    onClick={() => handleFilterChange("type", "rugged")}
                    className={
                        `van-type rugged ${filtered === "rugged" ? "selected" : ""}`
                    }
                >Rugged</button>

                {filtered && (
                    <button
                        onClick={() => handleFilterChange("type", null)}
                        className="van-type clear-filters"
                    >Clear filter</button>
                ) }

                </div>

            <h1>Explore our van options</h1>
            <div className="van-list">
                {vanElements}
            </div>
        </div>
    )
}