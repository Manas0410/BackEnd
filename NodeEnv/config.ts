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

// #1 first install dotenv package
// npm install dotenv

// #2 create a file named .env and add your environment variables
// S3_BUCKET="YOURS3BUCKET"
// SECRET_KEY="YOURSECRETKEYGOESHERE"
// S3_PASS="YOURPASSWORD"

// #3 (optional) create a config file managing environment configs config.ts
// import "dotenv/config";

// const {
//   DB_URL = "mongodb://localhost",
//   DB_PORT = 27017,
//   S3_BUCKET,
// } = process.env;

// export const dbURL = `${DB_URL}:${DB_PORT}`;
// export const s3Bucket = S3_BUCKET;
