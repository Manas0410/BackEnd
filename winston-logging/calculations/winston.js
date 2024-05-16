const winston = require("winston");
const iterations = 100000;

const logger = winston.createLogger({
  transports: [new winston.transports.Console()],
});

console.time("Winston");

// Define the log message
const logMessage = "This is a log message.";

// Log the message
for (let i = 0; i < iterations; i++) {
  logger.log({
    level: "info",
    message: logMessage,
  });
}

console.timeEnd("Winston");
