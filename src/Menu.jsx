import React from 'react'

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
                <MenuTab header='Боты' tabs={["Инфо", "Статистика", "Помощь", "Настройки", "Разное"]} />
                <MenuTab header='Конструктор' tabs={["Инфо", "Статистика", "Помощь", "Настройки", "Разное"]} />
                <MenuTab header='Рассылка' tabs={["Инфо", "Статистика", "Помощь", "Настройки", "Разное"]} />
                <MenuTab header='Статистика' tabs={["Инфо", "Статистика", "Помощь", "Настройки", "Разное"]} />
                <MenuTab header='Помощь' tabs={["Инфо", "Статистика", "Помощь", "Настройки", "Разное"]} />
                <MenuTab header='Настройки' tabs={["Инфо", "Статистика", "Помощь", "Настройки", "Разное"]} />
            </div>
            <div className={styles.menu}>
                <button className={styles.menu_btn} onClick={log}>
                    <img className={styles.menu_icon} src="src/img/aperture.svg" alt="#" />
                </button>
                <nav className={styles.menu_slider}>
                    <NavMenu title='Боты' icon='src/img/users.svg' />
                    <NavMenu title='Конструктор' icon='src/img/user-plus.svg' />
                    <NavMenu title='Рассылка' icon='src/img/mail.svg' />
                    <NavMenu title='Статистика' icon='src/img/bar-chart-2.svg' />
                    <NavMenu title='Помощь' icon='src/img/help-circle.svg' />
                    <NavMenu title='Настройки' icon='src/img/settings.svg' />
                </nav>
            </div>
        </div>

    )
}

export default Menu