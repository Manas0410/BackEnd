# mkdir ApiRateLimitting
# cd ApiRateLimitting
# npm init -y
# npm install express typescript @types/node @types/express ts-node nodemon --save-dev
# npx tsc --init
# mkdir src
#!/bin/bash

# Create project directory
mkdir $1
cd $1

# Initialize Node.js project
npm init -y

# Install dependencies
npm install express typescript @types/node @types/express ts-node nodemon --save-dev

# Set up TypeScript
npx tsc --init

# Create source directory
mkdir src

# Create server.ts file
cat <<EOF > src/server.ts
import express, { Request, Response } from "express";

const app = express();
const port: number = 3000;
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.status(200).send("api is working");
});

app.listen(port, () => {
  console.log("app is running on http://localhost:3000");
});

EOF

# Update package.json scripts
cat <<EOF > package.json
{
  "name": "$1",
  "version": "1.0.0",
  "description": "",
  "main": "dist/server.js",
  "scripts": {
    "build":"tsc",
    "start": "node dist/server.js",
    "dev": "nodemon src/server.ts"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "@types/express": "^4.17.13",
    "@types/node": "^16.11.4",
    "body-parser": "^1.19.1",
    "express": "^4.17.1",
    "nodemon": "^2.0.15",
    "ts-node": "^10.4.0",
    "typescript": "^4.5.5"
  }
}
EOF

# Compile TypeScript code
# npx tsc

# Notify user
echo "Project setup complete. Run 'npm run dev | nrd' to start the development server."
