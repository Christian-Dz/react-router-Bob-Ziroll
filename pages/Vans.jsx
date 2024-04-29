import { useState, useEffect } from "react"
import { Link, useSearchParams } from "react-router-dom"


export function Vans() {
    const [searchParams, setSearchParams] = useSearchParams()
    const [vans, setVans] = useState([])

    const typeFilter = searchParams.get("type")

    useEffect(() => {
        fetch("/api/vans")
            .then(res => res.json())
            .then(data => setVans(data.vans))
    }, [])

    const displayedVans = typeFilter
	? vans.filter(van => van.type === typeFilter)
	: vans

    const vanElements = displayedVans.map(van => (
        <div key={van.id} className="van-tile">
            <Link 
            to={van.id}
            state={{search:`?${searchParams.toString()}`,
                    type: typeFilter}}
            >                    {/* era una ruta absoluta ---> <Link to={`/vans/${van.id}`}> */}
                <img alt={van.name} src={van.imageUrl} />
                <div className="van-info">
                    <h3>{van.name}</h3>
                    <p>${van.price}<span>/day</span></p>
                </div>
                <i className={`van-type ${van.type} selected`}>{van.type}</i>
            </Link>
        </div>
    ))

    return (
        <div className="van-list-container">
            <h1>Explore our van options</h1>
            <nav className="van-list-filter-buttons">
                {/* setter function */}
                <button onClick={() => setSearchParams({type:"simple"})} className={`van-type simple ${typeFilter==="simple" ? "selected" : " "}`}>Simple</button>
                <button onClick={() => setSearchParams({type:"rugged"})} className={`van-type rugged ${typeFilter==="rugged" ? "selected" : " "}`}>Rugged</button>
                <button onClick={() => setSearchParams({type:"luxury"})} className={`van-type luxury ${typeFilter==="luxury" ? "selected" : " "}`}>Luxury</button>
                {typeFilter 
                ? <button onClick={() => setSearchParams({})} className="van-type clear-filters">Clear Filter</button>
                : null}

               {/*  <Link to="?type=simple" className="van-type simple">Simple</Link>
                <Link to="?type=rugged" className="van-type rugged">Rugged</Link>
                <Link to="?type=luxury" className="van-type luxury">Luxury</Link>
                <Link to="." className="van-type clear-filters">Back To All</Link> */}
            </nav>
            <div className="van-list">
                {vanElements}
            </div>
        </div>
    )
}