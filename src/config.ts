import { config } from "dotenv";

config();

export const MONGO = process.env.MONGODB_URI || '';
export const PORT = process.env.PORT || 3001;
export const SECRET = process.env.PASS_SEC || '';