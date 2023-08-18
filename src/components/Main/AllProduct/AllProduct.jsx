import React from 'react'
import FirstProduct from './FirstProduct/FirstProduct'
import './AllProduct.css'
import LastProduct from './LastProcust/LastProduct'
import { motion } from "framer-motion";


const containerMain = {
    visible: {
        transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2
        }
    }
}


function AllProduct({data, dataArray, setDataArray, filterData}) {
    
    return (
        <>
        <motion.div
        variants={containerMain}
        initial="hidden"
        animate="visible"
        className='allProduct'>
            <FirstProduct filterData={filterData} dataArray={dataArray} setDataArray={setDataArray} data={data}/>
            <LastProduct filterData={filterData} dataArray={dataArray} setDataArray={setDataArray} data={data}/>
        </motion.div>
        
        </>
    )
}

export default AllProduct