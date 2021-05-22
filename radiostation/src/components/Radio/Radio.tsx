import React, { useState, useEffect, FunctionComponent, useContext, createContext  } from 'react';
import styles from './Radio.module.css';
import backArrow from '../../assets/back-arrow.png'
import switchIcon from '../../assets/switch.png'

import RadioItem from '../RadioItem/RadioItem'

import { get } from '../../services/api'

import { FetchClient } from '../../services/api'

interface Props {

}

type FetchState<T> = 
  | { state: "pending"; }
  | { state: "resolved"; value: T }
  | { state: "rejected"; error: Error };

interface Station {
    name: string
    frequency: number
}

const FetchClientContext = createContext<FetchClient>(new FetchClient());

const Radio: FunctionComponent<Props> = (props) => {
    const [selectedRadio, setSelectedRadio] = useState("")
    const [post, setPost] = useState<FetchState<Station>>({ state: "pending" });

    const fetchClient = useContext(FetchClientContext);

    console.log(fetchClient)
    // useEffect(() => {
    //     fetchClient.getStations()
    //       .then(value => setPost({ state: "resolved", value }))
    //       .catch(error => setPost({ state: "rejected", error }));
    //   }, [fetchClient]);

      console.log(post)

    const stations = get()

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
                {stations.map((station) => (
                    <RadioItem 
                        radioName={station.name}
                        radioFrequency={station.frequency}
                        onRadioClicked={setSelectedRadioState}
                    />
                ))}
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