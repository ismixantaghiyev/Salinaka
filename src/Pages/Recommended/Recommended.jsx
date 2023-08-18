import React, { useEffect } from 'react'
import "./Recommended.css"
import Logos from "../../images/rec.png"
import Card from '../../components/Main/AllProduct/Card/Card'
import { motion } from "framer-motion";


const containerRecommended = {
    visible: {
        transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2
        }
    }
}

function Recommended({ data, dataArray, setDataArray, filterData }) {
    useEffect(() => window.scrollTo(0, 0), [])
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        >
            <div className='recommendedFlex'>
                <motion.div
                    initial={{ translateY: 30 }}
                    animate={{ translateY: 0 }}
                    className="rocommendedContainer">
                    <div className="recommendedText">
                        <div className="recommendedPadding">
                            <p>Recommended Products</p>
                        </div>
                    </div>
                    <div className="recommendedImg">
                        <img src={Logos} />
                    </div>
                </motion.div>
            </div>
            <motion.div
                initial="hidden"
                animate="visible"
                variants={containerRecommended}
                className="recommendedStyle">
                {filterData.slice(0, 6).map(item => <Card key={item.id} data={data} dataArray={dataArray} setDataArray={setDataArray} {...item} />)}
            </motion.div>
        </motion.div>
    )
}

export default Recommended