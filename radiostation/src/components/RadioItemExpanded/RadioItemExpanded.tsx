import React from 'react';
import styles from './RadioItemExpanded.module.css';

import minusIcon from '../../assets/minus.png'
import imageExpanded from '../../assets/image_expanded.png'
import plusIcon from '../../assets/plus.png'

function RadioItemExpanded() {
    return (
        <div className={styles.container}>
            <img className={styles.signs} src={minusIcon}></img>
            <img className={styles.imageExpandedStyle} src={imageExpanded}></img>
            <img className={styles.signs} src={plusIcon}></img>
        </div>
    )
}

export default RadioItemExpanded;