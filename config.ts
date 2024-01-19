import * as dotenv from "dotenv";
import { IEnvConfig } from "./interfaces/IEnvConfig";
dotenv.config();

export const PORT: number | string | undefined = process.env.PORT;
export const CORS: string | undefined = process.env.CORS;
export const SITE_URL: string | undefined = process.env.SITE_URL;
export const apikey: string | undefined = process.env.apikey;
