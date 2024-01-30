import { apikey, SITE_URL } from "@/../config";
import { NextApiRequest, NextApiResponse } from 'next';
// import { response } from "express";

// const optionsAPI = {method: 'GET', headers: {accept: 'application/json'}};

// const url: string = `${SITE_URL}?location=20.6620982,-103.3959561&apikey=${apikey}`
    // fetch(url, optionsAPI)
    // .then(response => response.json())
    // .then(response => console.log(response))
    // .catch(err => console.error(err));

// class Clima {
//     latitud: number;
//     longitud: number;
//     private readonly apikey: string | undefined;
//     private readonly url: string | undefined;
//     constructor(latitud: number, longitud: number) {
//         this.latitud = latitud,
//         this.longitud = longitud,
//         this.apikey = apikey,
//         this.url = SITE_URL
//     }

//     printData() {
//         console.log('this.apikey: ', this.apikey);
//         console.log('this.url: ', this.url);
//     }

//     async getData() {  
//         const optionsAPI = {method: 'GET', headers: {accept: 'application/json'}};
//         const url: string = `${SITE_URL}?location=${this.latitud},${this.longitud}&apikey=${apikey}`
//         const response = await fetch(url, optionsAPI);
//         const data = await response.json();
//         console.log('data: ', data);
//         return data;
//     }
// }
// const miClima = new Clima(20.6620982, -103.3959561).getData();

const getData = async (req: NextApiRequest, res: NextApiResponse) =>  { 
    try {
        const optionsAPI = {method: 'GET', headers: {accept: 'application/json'}};
        const { latitud, longitud } = req.body;
        console.log('latitud: ', latitud, 'longitud: ', longitud);
        const url: string = `${SITE_URL}?location=${latitud},${longitud}&apikey=${apikey}`
        const response = await fetch(url, optionsAPI);
        const data = await response.json();
        console.log('data: ', data);
        return data;
    } catch (error) {
        console.error('Error: ', error);
    }
}

export default getData