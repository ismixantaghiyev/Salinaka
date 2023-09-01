import React, { useEffect } from 'react'
import "./Shop.css"
import ShopItem from './ShopItem/ShopItem'
import { motion } from "framer-motion";



const containerisi = {
    visible: {
        transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2
        }
    }
}

function Shop({message, setMessage, setFilter, data, dataArray, setDataArray, filterData }) {
    useEffect(() => window.scrollTo(0, 0), [])

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className='shop'>
            <motion.div
            initial="hidden"
            animate="visible"
            variants={containerisi}
            className="shopContainer">
                {filterData.map(item => <ShopItem message={message} setMessage={setMessage} setFilter={setFilter} key={item.id} data={data} dataArray={dataArray} setDataArray={setDataArray} {...item} />)}
            </motion.div>
        </motion.div>
    )
}

export default Shop