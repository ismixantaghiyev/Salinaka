import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import "./ShopElement.css"

function ShopElement({ data }) {
    const { id } = useParams()
    const findData = data.find(item => item.id == id)
    const [color, setColor] = useState(false)

    const reng =()=>{
        setColor(!false )
    }


    return (
        <div className='AllElement'>
            <Link to="/shop"><p>🡰 Back to shop</p></Link>
            <div className='shopElement'>
                <div className="shopElementImg">
                    <div className="imgItem">
                        <img src={findData.img} />
                    </div>
                </div>
                <div className="shopElementContainer">
                    <div className="imgBig">
                        <img src={findData.img} />
                    </div>
                    <div className="shopElementText">
                        <small>{findData.category}</small>
                        <h1>{findData.name}</h1>
                        <p>Lorem Corrupti, deleniti! Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus dicta rerum assumenda iusto quidem veritatis quo voluptatem eius natus dolore.</p>
                        <hr/>
                        <p>Lens Width and Frame Size</p>
                        <select name="" id="">
                            <option value="">—Select Size—</option>
                            <option value="">28 mm</option>
                            <option value="">36 mm</option>
                            <option value="">42 mm</option>
                        </select>
                        <p>Choose Color</p>
                        <div className='colors'>
                            <div onClick={reng} className="black color"><span style={{display: color? "block":"none"}}>✔</span></div>
                            <div className="purple color"></div>
                            <div className="red color"></div>
                            <div className="blue color"></div>
                            <div className="brown color"></div>
                            <div className="skyblue color"></div>
                            <div className="green color"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ShopElement