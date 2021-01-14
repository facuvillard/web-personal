import React, { useState, useEffect } from "react";
import { Menu } from "antd"
import { Link } from "react-router-dom"
import { getMenuApi } from "../../../api/menu"
import logo from "../../../assets/img/png/logo_lion.png"
import "./MenuTop.scss"

export default function MenuTop() {
    const [menuData, setMenuData] = useState([])

    useEffect(() => {
        getMenuApi()
            .then((response) => {
                const arrayMenu = [];
                response.menu.forEach(item => {
                    item.active && arrayMenu.push(item)
                })
                setMenuData(arrayMenu)
            })
    }, [])
    return (
        <Menu className="menu-top-web" mode="horizontal">
            <Menu.Item className="menu-top-web__logo">
                <Link to="/">
                    <img src={logo} alt="Facundo Villard" />
                </Link>
            </Menu.Item>

            {menuData.map(item => {
                const external = item.url.indexOf("http") > -1 ? true : false

                if (external) {
                    return (
                        <Menu.Item key={item._id} className="menu-top-web__item">
                            <a href={item.url} target="_blank" >{item.title}</a>
                        </Menu.Item>
                    )
                } else {
                    return (
                        <Menu.Item key={item._id} className="menu-top-web__item">
                            <Link to={item.url}>{item.title}</Link>
                        </Menu.Item>
                    )
                }

            })}
            {/* <Menu.Item className="menu-top-web__item">
                <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item className="menu-top-web__item">
                <Link to="/contact">Contacto</Link>
            </Menu.Item> */}
            <div>Social Media...</div>
        </Menu>
    )

}