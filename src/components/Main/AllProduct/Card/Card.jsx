import React from 'react'
import "./Card.css"
import { motion } from "framer-motion";


const itemFeature = {
    hidden: {
        opacity: 0,
        translateY: 20
    },
    visible: {
        opacity: 1,
        translateY: 0
    }
}

function Card({price, name, category, img, dataArray, setDataArray, size, id }) {

    return (
        <div>
            <motion.div
            variants={itemFeature}
            className="allCard">
                <div className="imgCard">
                    <img className='immg' src={img} />
                </div>
                <div className="basliqCard">
                    <h2>{name}</h2>
                </div>
                <div className="aboutCard">
                    <p>{category}</p>
                </div>
            </motion.div>
        </div>
    )
}

export default Card