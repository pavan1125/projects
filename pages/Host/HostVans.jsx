import React from "react"
import { Link } from "react-router-dom"
export default function Hostvans() {

    const [userVans, setUserVans] = React.useState([])

    React.useEffect(() => {
        fetch("/api/host/vans")
            .then(res => res.json())
            .then(data => setUserVans(data.vans))
    })
    const vanList = userVans.map((van) => {
        return (
            <Link
                to={`/host/Vans/${van.id}`}
                key={van.id}
                className="host-van-link-wrapper"
            >
                <div className="host-van-single" key={van.id}>
                    <img src={van.imageUrl} alt={`Photo of ${van.name}`} />
                    <div className="host-van-info">
                        <h3>{van.name}</h3>
                        <p>${van.price}/day</p>
                    </div>
                </div>
            </Link>

        )

    })


    return (

        <section>
            <h1 className="host-vans-title">Your listed vans</h1>
            <div className="host-vans-list">
                {
                    userVans.length > 0 ? (
                        <section>
                            {vanList}
                        </section>

                    ) : (
                        <h2>Loading...</h2>
                    )
                }
            </div>
        </section>

    )
}