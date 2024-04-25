import { Outlet, NavLink } from "react-router-dom";


export function VanLayout (){

    const activeStyle = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }
    return (
        <>
            <nav className="host-nav">
                <NavLink 
                to="."                        
                end
                style={({isActive}) => isActive ? activeStyle : null}
                >Details</NavLink>

                <NavLink 
                to="pricing"
                style={({isActive}) => isActive ? activeStyle : null}
                >Pricing</NavLink>

                <NavLink 
                to="photos"
                style={({isActive}) => isActive ? activeStyle : null}
                >Photos</NavLink>
            </nav>
        </>
    )
}