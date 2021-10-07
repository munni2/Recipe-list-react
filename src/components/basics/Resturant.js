import React, {useState} from 'react'
import './style.css'
import Menu from './menuApi.js'
import MenuCard from './MenuCard'
// import Navbar from './Navbar'

const Resturant = () => {
    const [menuData, setMenuData] = useState(Menu)

    // 
    const filterItem = (category) => {
        const updatedList = Menu.filter((currEle) => {
            const tj = currEle.category;
            console.log(tj);
            return currEle.category === category;
        })
        setMenuData(updatedList);
    }

    return (
        <>
            {/* <Navbar /> */}
            <nav className="navbar">
                <div className="btn-group">
                    <button className="btn-group__item" onClick={() => filterItem("breakfast")}>breakfast</button>
                    <button className="btn-group__item" onClick={() => filterItem("breakfast")}>breakfast</button>
                    <button className="btn-group__item" onClick={() => filterItem("breakfast")}>breakfast</button>
                    <button className="btn-group__item" onClick={() => filterItem("breakfast")}>breakfast</button>
                </div>
            </nav> 
            <MenuCard menuData={menuData} />
        </>
    )
}

export default Resturant
