import React from 'react'
import "./Navbar.css"
import { Link, NavLink } from 'react-router-dom'

function Navbar({setState, setFilter}) {
    const shopClick =()=>{
        setState(1)
        setFilter(true)
    }
    const featured = () =>{
        setState(1)
        setFilter(false)
    }
    const homeClick =()=>{
        setState(1)
        setFilter(false)
    }
    const recommended=()=>{
        setState(1)
        setFilter(false)
    }
    
    return (
        <div className='nav'>
            <NavLink onClick={homeClick}  style={{ color: "#a8a6a6", textDecoration: "none" }} to="/"><p>Home</p></NavLink>
            <NavLink onClick={shopClick} style={{ color: "#a8a6a6", textDecoration: "none" }} to="/shop"><p>Shop</p></NavLink>
            <NavLink onClick={featured} style={{ color: "#a8a6a6", textDecoration: "none" }} to="/feature"><p>Featured</p></NavLink>
            <NavLink onClick={recommended} style={{ color: "#a8a6a6", textDecoration: "none" }} to="/recommended"><p>Recommended</p></NavLink>
        </div>
    )
}

export default Navbar