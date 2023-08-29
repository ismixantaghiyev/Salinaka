import React, { useContext, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import "./ShopElement.css"
import { StateContext } from '../../../AppProject'

function ShopElement({ data }) {
    const { dataArray, setDataArray } = useContext(StateContext)
    const { id } = useParams()
    const findData = data.find(item => item.id == id)
    console.log(findData);
    const [selected, setSelected] = useState(false)

    const name = findData.name;
    const price = findData.price;
    const category = findData.category;
    const size = findData.size;
    const img = findData.img;

    const reng = () => {
        setSelected(true)
    }
    const colors = [
        { name: 'black', selected: false },
        { name: 'purple', selected: false },
        { name: 'red', selected: false },
        { name: 'blue', selected: false },
        { name: 'brown', selected: false },
        { name: 'skyblue', selected: false },
        { name: 'green', selected: false },
    ];

    console.log(dataArray);
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
                        <hr />
                        <p>Lens Width and Frame Size</p>
                        <select name="" id="">
                            <option value="">—Select Size—</option>
                            <option value="">28 mm</option>
                            <option value="">36 mm</option>
                            <option value="">42 mm</option>
                        </select>
                        <p>Choose Color</p>
                        <div className='colors'>
                            {colors.map(item => (
                                <div onClick={reng} key={item.name} className={`color ${item.name}`}>
                                    <span style={{ display: selected ? "block" : "none" }} >✔</span>
                                </div>
                            ))}
                        </div>
                        <div className="elementPrice">
                            <h1>${findData.price}</h1>
                        </div>
                        <div className="elementButton">
                            <button onClick={addBasket}>Add to Basket</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ShopElement