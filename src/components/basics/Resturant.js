import React, {useState} from 'react'
import './style.css'
import Menu from './menuApi.js'
import MenuCard from './MenuCard'
import Navbar from './Navbar'

const uniqueList = [
    ...new Set(
        Menu.map( (curElem)=> {
            return curElem.category;
        })
    ),
    "All"
]
// console.log(uniqueList);

const Resturant = () => {
    const [menuData, setMenuData] = useState(Menu)
    const [menuList, setMenuList] = useState(uniqueList)

    // filter data 
    const filterItem = (category) => {
        if(category === "All") {
            setMenuData(Menu)
            return
        }

        const updatedList = Menu.filter((currEle) => {
            // const tj = currEle.category;
            // console.log(tj);
            return currEle.category === category;
        })
        setMenuData(updatedList);
    }

    return (
        <>
            <Navbar filterItem={filterItem} menuList={menuList} />
            <MenuCard menuData={menuData} />
        </>
    )
}

export default Resturant
