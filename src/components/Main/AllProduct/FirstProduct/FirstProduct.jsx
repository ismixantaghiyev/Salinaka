import React from 'react'
import Card from '../Card/Card'
import './FirstProduct.css'
import { Link } from 'react-router-dom'


function FirstProduct({ data, dataArray, setDataArray, filterData }) {
    return (
        <div className='firstProduct'>
            <div className='featuredProducts'>
                <div>
                    <h1>Featured Products</h1>
                </div>
                <div>
                    <Link to="/feature"><p>See All</p></Link>
                    
                </div>
            </div>
            {filterData.slice(0, 6).map(item => <Card key={item.id} data={data} dataArray={dataArray} setDataArray={setDataArray} {...item} />)}
        </div>
    )
}

export default FirstProduct