import React, { useState, FunctionComponent  } from 'react';
import styles from './Radio.module.css';
import backArrow from '../../assets/back-arrow.png'
import switchIcon from '../../assets/switch.png'

import RadioItem from '../RadioItem/RadioItem'

interface Props {}

const Radio: FunctionComponent<Props> = (props) => {
    const [selectedRadio, setSelectedRadio] = useState("")
    console.log(selectedRadio)
    const setSelectedRadioState = (newSelectedRadio: string) => {
        setSelectedRadio(newSelectedRadio)
    }
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <img className={styles.backArrow} src={backArrow}></img>
                <p className={styles.title}>STATIONS</p>
                <img className={styles.switch} src={switchIcon}></img>
            </div>
            <div className={styles.content}>
                <RadioItem onRadioClicked={setSelectedRadioState} />
                <RadioItem onRadioClicked={setSelectedRadioState} />
                <RadioItem onRadioClicked={setSelectedRadioState} />
            </div>

            <div className={styles.footer}>
                {selectedRadio != "" && (
                    <>
                        <span className={styles.currentlyText}>CURRENTLY PLAYING</span>
                        <span className={styles.currentRadio}>{selectedRadio}</span>
                    </>
                )}
            </div>
        </div>
    )
}

export default Radio;