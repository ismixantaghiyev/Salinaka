import React, { useEffect } from 'react'
import Card from '../Card/Card'
import "./LastProduct.css"
import { Link } from 'react-router-dom'
function LastProduct({ data, setDataArray, dataArray, filterData }) {
    useEffect(()=> window.scrollTo(0,0),[])
    return (
        <div className='lastProduct'>
            <div className='recommendedProducts'>
                <div>
                    <h1>Recommended Products</h1>
                </div>
                <div>
                    <Link to="/recommended"><p>See All</p></Link>
                </div>
            </div>
            {filterData.slice(6, 12).map(item => <Card key={item.id} {...item} dataArray={dataArray} setDataArray={setDataArray} {...item}/>)}
        </div>
    )
}

export default LastProduct