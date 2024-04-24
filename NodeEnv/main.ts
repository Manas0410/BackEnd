import "dotenv/config";
import { dbURL } from "./config";

console.log("Pass: ", process.env.S3_PASS || "Dummy");

console.log("dbURL:", dbURL);
