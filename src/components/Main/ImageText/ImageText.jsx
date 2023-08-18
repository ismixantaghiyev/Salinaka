import React from 'react'
import "./ImageText.css"
import imgQiz from "../../../images/qiz.png"
import { Link } from 'react-router-dom'
import { motion } from "framer-motion";

function ImageText() {
    return (
        <motion.div
        initial={{translateY:30}}
        animate={{translateY:0}}
        className='imgContainer'>
            <div className='text'>
                <div className='textPadding'>
                    <div>
                        <p><span>See</span> everything with <span>Clarity</span></p>
                    </div>
                    <div>
                        <small>Buying eyewear should leave you happy and good-looking, with money in your pocket. Glasses, sunglasses, and contacts—we’ve got your eyes covered.</small>
                    </div>
                    <div>
                        <Link to="/shop"><button>Shop now 🡢</button></Link>
                        
                    </div>
                </div>
            </div>
            <div className="imgQiz">
                <img src={imgQiz} alt="qiz" />
            </div>
        </motion.div>
    )
}

export default ImageText