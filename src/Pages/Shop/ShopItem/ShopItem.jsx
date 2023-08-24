import React, { useState } from 'react'
import "./ShopItem.css"
import { LiaCheckSolid } from "react-icons/lia";
import { motion } from "framer-motion";


const itemisi = {
    hidden: {
        opacity: 0,
        translateY: 20
    },
    visible: {
        opacity: 1,
        translateY: 0
    }
}

function ShopItem({ price, name, category, img, dataArray, setDataArray, size, id }) {


    const addBasket = () => {
        const productIndex = dataArray.findIndex(index => index.name === name)
        if (productIndex !== -1) {
            setDataArray(prev => {
                prev[productIndex].quantity += 1
                setDataArray([...prev])
            })
        }
        else {
            setDataArray(prev => [...prev, { name, category, img, quantity: 1, price, size, id, status: true }])
        }
    }

    const shopDelete = () => {
        const shopFilter = dataArray.filter(item => item.id !== id)
        setDataArray(shopFilter);
    }

    const activeData = dataArray.find(item => item.id == id)
    console.log(activeData?.status);
    return (
        <motion.div
            variants={itemisi}
            style={{ border: activeData?.status ? "1px solid #A4A3A3" : "1px solid #ece9e9", boxShadow: activeData?.status ? "rgba(149, 157, 165, 0.2) 0px 8px 24px;" : "none" }} className='shopAll'>
            <div className="shopImg">
                <img src={img} alt={name} />
                <p style={{ display: activeData?.status ? "block" : "none" }}><LiaCheckSolid /></p>
            </div>
            <div className="shopAbout">
                <div className='shopnameKata'>
                    <p>{name}</p>
                    <p>{category}</p>
                </div>
                <div>
                    <p>${price}</p>
                </div>
            </div>
            <div className='shopButton'>
                {activeData?.status ? <div style={{ background: "white", color: "black" }} className='shopButton' onClick={shopDelete}><p>Remove from basket</p></div> : <div className='shopButton' onClick={addBasket}><p>Add to basket</p></div>}
            </div>
        </motion.div>
    )
}

export default ShopItem;
