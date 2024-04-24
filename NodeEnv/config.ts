import "dotenv/config";

const {
  DB_URL = "mongodb://localhost",
  DB_PORT = 27017,
  S3_BUCKET,
} = process.env;

/* export const dbURL = DB_URL
  ? `${DB_URL}:${DB_PORT}`
  : "mongodb://localhost:27017"; */

export const dbURL = `${DB_URL}:${DB_PORT}`;

export const s3Bucket = S3_BUCKET;
