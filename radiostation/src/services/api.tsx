import react, { useEffect } from 'react';

export const get = () => {
    const mockedData = [
        {
            "name": "Putin FM",
            "frequency": "66,6"
        },
        {
            "name": "Dribble FM",
            "frequency": "106,6"
        },
        {
            "name": "Doge FM",
            "frequency": "99,4"
        },
        {
            "name": "Ballads FM",
            "frequency": "87,1"
        },
        {
            "name": "Maximum FM",
            "frequency": "142,2"
        },
    ]

    return mockedData
}

export class FetchClient {
    baseURL: string;
    constructor(baseURL: string = "dfewdwe") {
      this.baseURL = baseURL;
    }
    getStations = async () => {
        const mockedData = get()
        // const response = await fetch(`${this.baseURL}/stations/`);
        // return await response.json();
        return mockedData;
    }
}