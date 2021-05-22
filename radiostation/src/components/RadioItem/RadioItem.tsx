import React, { useState, FunctionComponent } from 'react';
import styles from './RadioItem.module.css';
import RadioItemExpanded from '../RadioItemExpanded/RadioItemExpanded'

interface Props {
    radioName: string;
    radioFrequency: string;
    onRadioClicked: (newSelectedRadio: string) => any;
}

const RadioItem: FunctionComponent<Props> = (props) => {
    const [showExpansion, setShowExpansion] = useState(false)

    const handleClick = () => {
        setShowExpansion(!showExpansion)
        props.onRadioClicked(showExpansion ? ""  : props.radioName)
    }
    return (
        <div onClick={() => handleClick()}className={styles.container}>
            <div className={styles.infoContainer}>
                <p className={styles.radioName}>{props.radioName}</p>
                <p className={styles.radioFrequency}>{props.radioFrequency}</p>
            </div>
            <div className={styles.divider}></div>
            {showExpansion && (
                <RadioItemExpanded />
            )}
        </div>
    )
}

export default RadioItem;