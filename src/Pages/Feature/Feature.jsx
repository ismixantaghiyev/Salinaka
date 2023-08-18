import React, { useEffect } from 'react'
import "./Feature.css"
import Kisi from "../../images/kisi.png"
import Card from '../../components/Main/AllProduct/Card/Card'
import { motion } from "framer-motion";


const containerFeature = {
    visible: {
        transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2
        }
    }
}



function Feature({ data, dataArray, setDataArray, filterData }) {
    useEffect(() => window.scrollTo(0, 0), [])
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        >
            <motion.div
                initial={{ translateY: 30 }}
                animate={{ translateY: 0 }}
                className='featureFlex'>
                <div className="feature">
                    <div className="featureText">
                        <div className="featurePadding">
                            <p>Featured Products</p>
                        </div>
                    </div>
                    <div className="featureImg">
                        <img src={Kisi} />
                    </div>
                </div>
            </motion.div>
            <motion.div
                initial="hidden"
                animate="visible"
                variants={containerFeature}
                className="featuseStyle">
                {filterData.slice(0, 6).map(item => <Card key={item.id} data={data} dataArray={dataArray} setDataArray={setDataArray} {...item} />)}
            </motion.div>
        </motion.div>
    )
}

export default Feature