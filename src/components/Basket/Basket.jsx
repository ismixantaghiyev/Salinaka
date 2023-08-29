    import React, { useEffect } from 'react'
import "./Basket.css"
import BasketItem from '../BasketItem/BasketItem'
import { motion } from "framer-motion";


const containerisi = {
    visible: {
        transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2
        }
    }
}


function Basket({addedToBasket, setAddedToBasket, open, setOpen, dataArray, setDataArray }) {

    let totalItem = 0;
    let subTotal = 0

    if (dataArray.length > 0) {
        for (let i = 0; i < dataArray.length; i++) {
            subTotal += dataArray[i].price * dataArray[i].quantity
        }

        for (let i = 0; i < dataArray.length; i++) {
            totalItem += dataArray[i].quantity
        }
    }

    const click = () => {
        setOpen(!open)
    }


    useEffect(() => {
        if (open) {
            document.body.style.overflowY = 'hidden';
        } else {
            document.body.style.overflowY = 'visible';
        }
        return () => {
            document.body.style.overflowY = 'visible';
        };
    }, [open]);

    return (
        <div>
            <div style={{ right: open ? "0" : "-600px" }} className='basket'>
                <div className="basketContainer">
                    <div className="basketHeader">
                        <div className='basketItem'>
                            <h3>My Basket</h3> <span>({totalItem} item)</span>
                        </div>
                        <div>
                            <button onClick={click}>Close</button>
                            <button style={{ cursor: dataArray.length == 0 ? 'no-drop' : 'pointer' }} onClick={() => setDataArray([])} >Clear Basket</button>
                        </div>
                    </div>
                    <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={containerisi}
                    className="itemsBasket">
                        <div className='empty' style={{ display: dataArray.length == 0 ? "block" : "none" }}>
                            <p>Your basket is empty</p>
                        </div>
                        {dataArray.map(item => <BasketItem addedToBasket={addedToBasket} setAddedToBasket={setAddedToBasket} {...item} key={item.id} dataArray={dataArray} setDataArray={setDataArray} />)}
                    </motion.div>
                    <hr />
                    <div className='subtotalAll'>
                        <div className='subtotal'>
                            <small>Subtotal Amout:</small>
                            <h2>${subTotal}</h2>
                        </div>
                        <div className="checkoutBtn">
                            <button style={{ cursor: dataArray.length == 0 ? "no-drop" : "pointer", backgroundColor: dataArray.length != 0 ? "black" : "#878787" }}>Check Out</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Basket