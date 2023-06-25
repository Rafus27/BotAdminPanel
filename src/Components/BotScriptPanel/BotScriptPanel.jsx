import React from 'react';
import Flow from './Node.jsx'

import styles from './BotScriptPanel.module.css';

function BotScriptPanel() {
    return (
        <div className={styles.container}>
            <Flow />
        </div>
    )
}

export default BotScriptPanel