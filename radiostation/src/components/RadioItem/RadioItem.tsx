import React, { useState, FunctionComponent } from 'react';
import styles from './RadioItem.module.css';
import RadioItemExpanded from '../RadioItemExpanded/RadioItemExpanded'

interface Props {
    onRadioClicked: (newSelectedRadio: string) => any;
}

const RadioItem: FunctionComponent<Props> = (props) => {
    const [showExpansion, setShowExpansion] = useState(false)
    return (
        <div onClick={() => {setShowExpansion(!showExpansion); props.onRadioClicked("PutinFM")} }className={styles.container}>
            <div className={styles.infoContainer}>
                <p className={styles.radioName}>PutinFM</p>
                <p className={styles.radioFrequency}>66,6</p>
            </div>
            <div className={styles.divider}></div>
            {showExpansion && (
                <RadioItemExpanded />
            )}
        </div>
    )
}

export default RadioItem;