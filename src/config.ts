import { config } from "dotenv";

config();

export const MONGO = process.env.MONGODB_URI || '';
export const PORT = process.env.PORT || 3001;
export const SECRET_1 = process.env.SECRET_1 || '';
export const SECRET_2 = process.env.SECRET_2 || '';