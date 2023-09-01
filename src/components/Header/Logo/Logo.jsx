import React from 'react'
import "./Logo.css"
import LogoImg from "../../../images/logo.png"
import { Link } from 'react-router-dom'

function Logo() {
    return (
        <Link to="/">
            <div className='logo'>
                {/* <img src={LogoImg} alt="" /> */}
            </div>
        </Link>
    )
}

export default Logo