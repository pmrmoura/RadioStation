import React from 'react';
import styles from './RadioContainer.module.css';
import Radio from '../Radio/Radio'

function RadioContainer() {
    return (
        <div className={styles.container}>
            <Radio />
        </div>
    )
}

export default RadioContainer;