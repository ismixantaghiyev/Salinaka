import React, { useState } from 'react'
import "./Header.css"
import Logo from './Logo/Logo'
import Navbar from './Navbar/Navbar'
import Search from './Search/Search'
import Login from './Login/Login'
import Message from './Message/Message'

function Header({message, setMessage, filter, setFilter, addedToBasket, setAddedToBasket, dataArray, setDataArray, data, inputSearch, value}) {
    const [state , setState] = useState(1)
    // const [filter, setFilter] = useState(false)
    return (
        <div className='header'>
            <div className='container'>
                <div className='dFlex' onClick={()=>setState(1)}>
                    <Logo/>
                    <Navbar filter={filter} setFilter={setFilter} setState={setState} />
                </div>
                <div className='dFlex'>
                    <Search addedToBasket={addedToBasket} setAddedToBasket={setAddedToBasket} filter={filter} setFilter={setFilter} value={value} inputSearch={inputSearch} data={data} dataArray={dataArray} setDataArray={setDataArray} />
                    <Login state={state} setState={setState} />
                    <Message message={message} setMessage={setMessage}/>
                </div>
            </div>
        </div>
    )
}

export default Header