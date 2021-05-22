import React, { createContext, useMemo } from 'react';
import styles from './RadioContainer.module.css';
import Radio from '../Radio/Radio'

import { FetchClient } from '../../services/api'

const FetchClientContext = createContext<FetchClient>(new FetchClient());

function RadioContainer() {

    const fetchClient = useMemo(() => new FetchClient("baseURL"), []);

    return (
        <FetchClientContext.Provider value={fetchClient}>
            <div className={styles.container}>
                <Radio />
            </div>
        </FetchClientContext.Provider>
    )
}

export default RadioContainer;