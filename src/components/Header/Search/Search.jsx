import React, { useState } from 'react'
import "./Search.css"
import { GrBasket } from 'react-icons/gr';
import { AiOutlineSearch } from 'react-icons/ai';
import Basket from '../../Basket/Basket';
import { AiOutlineFilter } from 'react-icons/ai';


function Search({ addedToBasket, setAddedToBasket, dataArray, setDataArray, inputSearch, value, filter, setFilter }) {

    const [open, setOpen] = useState(false)
    const click = () => {
        setOpen(!open)
        console.log("salam");
    }
    let count = dataArray.length;


    const filterClick = () => {
        
    }

    return (
        <>
            <div className='search'>
                {filter ? <div onClick={filterClick} className='filter'>
                    <div className='filterText'>Filter</div>
                    <div className='filterIcon'>
                        <AiOutlineFilter />
                    </div>
                </div> : null}
                <div className='inp'>
                    <input value={value} onChange={inputSearch} type="text" placeholder='Search product' />
                    <AiOutlineSearch style={{ position: "relative", top: "5px", right: "281", color: "#7A7A7A", fontSize: "20px" }} />
                </div>
                <div className='basketIconss' onClick={click}>
                    <GrBasket style={{ fontSize: "25px", cursor: "pointer", position: "relative" }} />
                    <div className='count' style={{ display: dataArray.length == 0 ? "none" : "block" }}><p>{count}</p></div>
                </div>
                <Basket addedToBasket={addedToBasket} setAddedToBasket={setAddedToBasket} dataArray={dataArray} setDataArray={setDataArray} open={open} setOpen={setOpen} />
            </div>
        </>

    )
}

export default Search