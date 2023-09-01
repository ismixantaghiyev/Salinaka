import React from 'react'
import "./BasketItem.css"
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

function BasketItem({ quantity, name, img, price, size, id, dataArray, setDataArray }) {

    const deleteItem = () => {
        const filterData = dataArray.filter(item => item.id != id)
        setDataArray(filterData)
    }

    const plus = () => {
        setDataArray(prevData =>
            prevData.map(item => (item.id === id ? { ...item, quantity: item.quantity + 1 } : item))
        );
    };

    const minus = () => {
        setDataArray(prevData =>
            prevData.map(item => (item.quantity !== 1 ? { ...item, quantity: item.quantity - 1 } : item))
        );
    };



    return (
        <div>
            <motion.div
                variants={itemisi}
                className="BasketCart">
                <div className='basketItemCountBtn'>
                    <button onClick={plus}>+</button>
                    <button onClick={minus} style={{ cursor: quantity == 1 ? 'no-drop' : 'pointer' }} >-</button>
                </div>
                <div className='basketItemImg'>
                    <img src={img} />
                </div>
                <div className="basketItemAbout">
                    <div className="basketItemName"><p>{name}</p></div>
                    <div className="basketItemColorSize">
                        <div><p>Quantity</p><span>{quantity}</span></div>
                        <div><p>Size</p><span>{size}</span></div>
                        <div className='colorBasket'><p>Color</p><span>red</span></div>
                    </div>
                </div>
                <div className="price">
                    <p>${price * quantity}</p>
                </div>
                <div className="basketDeleteBtn">
                    <button onClick={deleteItem}> X </button>
                </div>
            </motion.div>
        </div>
    )
}

export default BasketItem