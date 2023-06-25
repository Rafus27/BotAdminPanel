import React from 'react'

import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";

import NavMenu from './NavMenu'
import MenuTab from './MenuTab'

import styles from './Menu.module.css'

function Menu() {

    const log = () => console.log('menu')

    const blur = () => {
        document.getElementById('Боты').classList.remove('active');
        document.getElementById('Конструктор').classList.remove('active');
        document.getElementById('Рассылка').classList.remove('active');
        document.getElementById('Статистика').classList.remove('active');
        document.getElementById('Помощь').classList.remove('active');
        document.getElementById('Настройки').classList.remove('active');
        document.getElementById('onblur').classList.remove('active');
    }

    return (
        <div className={styles.container}>
            <div id='onblur' className="onblur" onClick={blur}></div>
            <div className={styles.tabs_wrapper}>
                {/* <MenuTab header='Боты' tabs={["Инфо", "Статистика", "Помощь", "Настройки", "Разное"]} />
                <MenuTab header='Конструктор' tabs={["Инфо", "Статистика", "Помощь", "Настройки", "Разное"]} />
                <MenuTab header='Рассылка' tabs={["Инфо", "Статистика", "Помощь", "Настройки", "Разное"]} />
                <MenuTab header='Статистика' tabs={["Инфо", "Статистика", "Помощь", "Настройки", "Разное"]} />
                <MenuTab header='Помощь' tabs={["Инфо", "Статистика", "Помощь", "Настройки", "Разное"]} />
                <MenuTab header='Настройки' tabs={["Инфо", "Статистика", "Помощь", "Настройки", "Разное"]} /> */}
                {/* <NavLink to="/">Главная</NavLink>
                <NavLink to="/bots">Боты</NavLink>
                <NavLink to="/constructor">Конструктор</NavLink>
                <NavLink to="/mailing">Рассылки</NavLink>
                <NavLink to="/stats">Статистика</NavLink>
                <NavLink to="/help">Помощь</NavLink>
                <NavLink to="/settings">Настройки</NavLink> */}
            </div>
            <div className={styles.menu}>
                <button className={styles.menu_btn} onClick={log}>
                    <img className={styles.menu_icon} src="src/img/aperture.svg" alt="#" />
                </button>
                <nav className={styles.menu_slider}>
                    {/* <NavMenu title='Боты' icon='src/img/users.svg' />
                    <NavMenu title='Конструктор' icon='src/img/user-plus.svg' />
                    <NavMenu title='Рассылка' icon='src/img/mail.svg' />
                    <NavMenu title='Статистика' icon='src/img/bar-chart-2.svg' />
                    <NavMenu title='Помощь' icon='src/img/help-circle.svg' />
                    <NavMenu title='Настройки' icon='src/img/settings.svg' /> */}
                    <NavLink to="/"><NavMenu title='Главная' icon='src/img/home.svg' /></NavLink>
                    <NavLink to="/bots"><NavMenu title='Боты' icon='src/img/users.svg' /></NavLink>
                    <NavLink to="/chats"><NavMenu title='Чаты' icon='src/img/message-square.svg' /></NavLink>
                    <NavLink to="/mailing"><NavMenu title='Рассылка' icon='src/img/mail.svg' /></NavLink>
                    <NavLink to="/stats"><NavMenu title='Статистика' icon='src/img/bar-chart-2.svg' /></NavLink>
                    <NavLink to="/help"><NavMenu title='Помощь' icon='src/img/help-circle.svg' /></NavLink>
                    <NavLink to="/settings"><NavMenu title='Настройки' icon='src/img/settings.svg' /></NavLink>
                </nav>
            </div>
        </div>

    )
}

export default Menu