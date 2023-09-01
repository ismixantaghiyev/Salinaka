import React, { useContext, useState } from 'react'
import "./ShopItem.css"
import { LiaCheckSolid } from "react-icons/lia";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { StateContext } from '../../../AppProject';


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

function ShopItem({message, setMessage, setFilter, price, name, category, img, dataArray, setDataArray, size, id }) {

    const { setActive } = useContext(StateContext)

    const addBasket = () => {
        setActive(true)
        setTimeout(()=>{
        setActive(false)

        },1500)
        const product = dataArray.find(item => item.name === name);
        if (product) {
            product.quantity += 1;
            setDataArray(prev => [...prev]);
            localStorage.setItem("dataArray", JSON.stringify(dataArray))
        }
        else {
            setMessage(true)
            console.log(message);
            setDataArray(prev => [...prev, { name, category, img, quantity: 1, price, size, id, status: true }])
        }
    }

    const shopDelete = () => {
        setActive(true)
        setTimeout(()=>{
        setActive(false)

        },1500)
        const shopFilter = dataArray.filter(item => item.id !== id)
        setDataArray(shopFilter);
        setMessage(false)
        console.log(message);
    }

    const activeData = dataArray.find(item => item.id == id)


    const cardClick = () => {
        setFilter(false)
    }

    return (
        <>
            <motion.div
                variants={itemisi}
                onClick={cardClick}
                style={{ border: activeData?.status ? "1px solid #A4A3A3" : "1px solid #ece9e9" }} className='shopAll'>
                <Link to={`/shop/` + id}>
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
                </Link>
                <div className='shopButton'>
                    {activeData?.status ? <div style={{ background: "white", color: "black" }} className='shopButton' onClick={shopDelete}><p>Remove from basket</p></div> : <div className='shopButton' onClick={addBasket}><p>Add to basket</p></div>}
                </div>
            </motion.div>
        </>
    )
}

export default ShopItem;
