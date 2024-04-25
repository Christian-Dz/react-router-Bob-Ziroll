import { Link } from "react-router-dom"


export function Header(){

    return(
        <>
        <header>
            <nav>
                <Link className="site-logo" to="/">#VANLIFE</Link>
                <Link to="/host">Host</Link>
                <Link to="/about">About</Link>
                <Link to="/vans">Vans</Link>
            </nav>
        </header>    
        </>
    )
}
