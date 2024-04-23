import { Link } from "react-router-dom"
import "../src/App"

export function Menu(){

    return(
        <>
        <header>
            <nav>
                <Link className="site-logo" to="/">#VANLIFE</Link>
                <Link to="/about">About</Link>
                {/*<Link to="/vans">Vans</Link>*/}
            </nav>
        </header>    
        </>
    )
}
