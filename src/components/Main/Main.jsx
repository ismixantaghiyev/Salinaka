import React from 'react'
import AllProduct from './AllProduct/AllProduct'
import "./Main.css"
import ImageText from './ImageText/ImageText'
import { motion } from "framer-motion";

function Main({ data, dataArray, setDataArray, filterData }) {
    return (
        <motion.div
        initial={{opacity:0}}
        animate={{opacity:1}}
            className='main'>
            <ImageText />
            <AllProduct filterData={filterData} dataArray={dataArray} setDataArray={setDataArray} data={data} />
        </motion.div>
    )
}

export default Main