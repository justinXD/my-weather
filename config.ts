import * as dotenv from "dotenv";
import { IEnvConfig } from "./interfaces/IEnvConfig";
dotenv.config();

const PORT: number | string | undefined = process.env.PORT
const CORS: string | undefined = process.env.CORS
const apikey: string | undefined = process.env.apikey
export default { PORT, CORS, apikey }
// const options = {method: 'GET', headers: {accept: 'application/json'}};

// fetch('https://api.tomorrow.io/v4/weather/forecast?location=new%20york&apikey=', options)
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(err => console.error(err));