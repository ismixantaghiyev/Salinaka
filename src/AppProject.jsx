import React, { useEffect, useState } from 'react'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'
import SignIn from './Pages/SignIn/SignIn'
import SignUp from './Pages/SignUp/SignUp'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Shop from './Pages/Shop/Shop'
import Feature from './Pages/Feature/Feature'
import Recommended from './Pages/Recommended/Recommended'


function AppProject() {
    // useEffect(()=> window.scrollTo(0,0),[])
    const [dataArray, setDataArray] = useState([])
    const data = [
        {
            size: "24mm",
            id: 1,
            price: 674.00,
            name: "Kibal Batal",
            category: "Kibal Black",
            img: "https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2F7l3FMZqY8JdfssalDgx2?alt=media&token=be15689c-e12c-4829-9d78-32395ef1e3f7"
        },
        {
            size: "28mm",
            id: 2,
            price: 240.00,
            name: "Very Nice",
            category: "Salt maalat",
            img: "https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FALz5M4DI7MF7CdZrq3gS?alt=media&token=8d33ea34-2de3-466b-9b3d-27015e9cd540"
        },
        {
            size: "22mm",
            id: 3,
            price: 320.00,
            name: "Burnikk",
            category: "Sexbomb",
            img: "https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FLIu8tS4yHSU28Xi8BXCj?alt=media&token=31e796ad-dbd6-4e4f-a8a9-192f5158684a"
        },
        {
            size: "30mm",
            id: 4,
            price: 120.00,
            name: "Balakubak ",
            category: "Betsin Maalat",
            img: "https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FYVPdTsyxJybMCsdKpXhq?alt=media&token=23d7673c-a0bf-4dcb-89f1-8482446b56be"
        },
        {
            size: "26mm",
            id: 5,
            price: 430.00,
            name: "Tiktilaok Manok",
            category: "Sexbomb",
            img: "https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FYZ7LM3vZjWbIIJH2tgEb?alt=media&token=5e722063-a792-4502-9f6e-c3df1581aa9c"
        },
        {
            size: "22mm",
            id: 6,
            price: 234.00,
            name: "Black Sunglasses 1",
            category: "Sunglasses",
            img: "https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FbS1hHdO7NvbR1yN5ZPlR?alt=media&token=809a3249-f83d-4aec-b134-34a65ce2ce10"
        },


        {
            size: "18mm",
            id: 7,
            price: 543.00,
            name: "Kibal Batal",
            category: "Kibal Black",
            img: "https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2F7l3FMZqY8JdfssalDgx2?alt=media&token=be15689c-e12c-4829-9d78-32395ef1e3f7"
        },
        {
            size: "28mm",
            id: 8,
            price: 133.00,
            name: "Very Nice",
            category: "Salt maalat",
            img: "https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FALz5M4DI7MF7CdZrq3gS?alt=media&token=8d33ea34-2de3-466b-9b3d-27015e9cd540"
        },
        {
            size: "26mm",
            id: 9,
            price: 450.00,
            name: "Burnikk",
            category: "Sexbomb",
            img: "https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FLIu8tS4yHSU28Xi8BXCj?alt=media&token=31e796ad-dbd6-4e4f-a8a9-192f5158684a"
        },
        {
            size: "20mm",
            id: 10,
            price: 750.00,
            name: "Kulangot ",
            category: "Salt",
            img: "https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FYIZuxWur1W4fAT6z3ejk?alt=media&token=7dca264f-c345-4cfc-93a8-60217a53f66a"
        },
        {
            size: "24mm",
            id: 11,
            price: 244.00,
            name: "Sipon Malapot",
            category: "Salt",
            img: "https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FYjDAQSbkSZlartelhFyV?alt=media&token=9b0bdd5e-eb91-4d99-a52f-298c12879fa3"
        },
        {
            size: "22mm",
            id: 12,
            price: 433.00,
            name: "Pitaklan",
            category: "Black Kibal",
            img: "https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FaubOenOJu42CNp4zXTLX?alt=media&token=1d5fd281-b9cc-499b-94a5-225273b1eabc"
        },
    ]
    const [value, setValue] = useState("")
    const [addedToBasket, setAddedToBasket] = useState(false);
    const inputSearch = (e) => {
        setValue(e.target.value)
    }
    const navigate = useNavigate()
    const filterData = data.filter(item => item.name.toLowerCase().startsWith(value.toLowerCase()))
    useEffect(() => {
        navigate("/")
    }, [])

    return (
        <div>
            <Header addedToBasket={addedToBasket} setAddedToBasket={setAddedToBasket} value={value} inputSearch={inputSearch} data={data} dataArray={dataArray} setDataArray={setDataArray} />
            <Routes>
                <Route path="recommended" element={<Recommended filterData={filterData} dataArray={dataArray} setDataArray={setDataArray} data={data} />} />
                <Route path="feature" element={<Feature filterData={filterData} dataArray={dataArray} setDataArray={setDataArray} data={data} />} />
                <Route path="shop" element={<Shop addedToBasket={addedToBasket} setAddedToBasket={setAddedToBasket} filterData={filterData} dataArray={dataArray} setDataArray={setDataArray} data={data}/>} />c
                <Route path="signin" element={<SignIn />} />
                <Route path="signup" element={<SignUp />} />
                <Route path="/" element={<Main filterData={filterData} dataArray={dataArray} setDataArray={setDataArray} data={data} />} />
            </Routes>
            <Footer />
        </div>
    )
}

export default AppProject