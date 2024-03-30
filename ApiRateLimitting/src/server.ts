import express from "express";
import rateLimit from "express-rate-limit";
import TotalRateLimitRoute from "./Routes/TotalApiLimitRoute";
import keyBasedRateLimitRoute from "./Routes/KeyBasedApiLimitRoute";

const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (req, res) => {
  res.status(200).send("api is working");
});

// total rate limitting on specific route

const totalapilimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // limit each IP to 5 login attempts per windowMs
  message: "Too many login attempts, please try again later",
});

app.use("/totalapilimit", totalapilimiter);
app.use("/totalapilimit", TotalRateLimitRoute);

// based on users email address
const EmailLoginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // limit each email to 5 login attempts per windowMs
  keyGenerator: (req) => {
    return req.body.email;
  },
  message: "Too many login attempts, please try again later",
});

app.use("/emailbasedlapilimit", EmailLoginLimiter);
app.use("/emailbasedlapilimit", keyBasedRateLimitRoute);

app.listen(port, () => {
  console.log("app is running on http://localhost:3000");
});
