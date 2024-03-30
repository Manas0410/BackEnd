import express from "express";
import rateLimit from "express-rate-limit";

const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // limit each IP to 5 login attempts per windowMs
  message: "Too many login attempts, please try again later",
});

const app = express();
const port = 3000;
app.get("/", (req, res) => {
  res.status(200).send("api is working");
});
app.use("/api/login", loginLimiter);
app.post("/api/login", (req, res) => {
  // handle login logic
  const { email, password } = req.body;
  // check email and password
  // If valid, return success
  // otherwise, return error
});

// based on users email address
const EmailLoginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // limit each email to 5 login attempts per windowMs
  keyGenerator: (req) => {
    return req.body.email;
  },
  message: "Too many login attempts, please try again later",
});

app.listen(port, () => {
  console.log("app is running on http://localhost:3000");
});
