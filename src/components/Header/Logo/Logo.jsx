import React from 'react'
import "./Logo.css"
import LogoImg from "../../../images/logo.png"
import { Link } from 'react-router-dom'

function Logo() {
    return (
        <div className='logo'>
            <Link to="/">
                {/* <img src={LogoImg} alt="" /> */}
            </Link>
        </div>
    )
}

export default Logo