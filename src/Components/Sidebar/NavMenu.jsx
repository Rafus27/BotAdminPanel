import React from 'react'

import styles from './NavMenu.module.css'

function NavMenu(props) {
    const TabActivate = () => {
        document.getElementById('Боты').classList.remove('active');
        document.getElementById('Конструктор').classList.remove('active');
        document.getElementById('Рассылка').classList.remove('active');
        document.getElementById('Статистика').classList.remove('active');
        document.getElementById('Помощь').classList.remove('active');
        document.getElementById('Настройки').classList.remove('active');
        document.getElementById(props.title).classList.add('active')
        document.getElementById('onblur').classList.add('active');
    } 
    return (
        <button className={styles.btn} title={props.title} onClick={TabActivate} >
            <img className={styles.img} src={props.icon} alt={props.title} />
        </button>
    )
}

export default NavMenu