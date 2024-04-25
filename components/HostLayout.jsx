import { Outlet, NavLink } from "react-router-dom";


export function HostLayout (){

    const activeStyle = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }
    return (
        <>
            <nav className="host-nav">
                 {/* "/host"  --->   "." */}
                <NavLink 
                to="."                        
                end
                style={({isActive}) => isActive ? activeStyle : null}
                >Dashboard</NavLink>

                <NavLink 
                to="hostvans"
                style={({isActive}) => isActive ? activeStyle : null}
                >Your Vans</NavLink>

                <NavLink 
                to="income"
                style={({isActive}) => isActive ? activeStyle : null}
                >Income</NavLink>

                <NavLink 
                to="reviews"
                style={({isActive}) => isActive ? activeStyle : null}
                >Reviews</NavLink>
            </nav>
            <Outlet/>
        </>
    )
}