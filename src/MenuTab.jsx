import React from 'react'

import styles from './/NavMenu.module.css'


function MenuTab(props) {

    return (
        <div id={props.header} className='tab'>
            <h1 className={styles.header}>{props.header}</h1>
            {props.tabs.map((link, index) => 
                <a key={index} href="#" className={styles.tabs}>{link}</a>
            )}
        </div>
    )
}

export default MenuTab