import logger from "./src/services/logging/logging.service";

const iterations = 5;

console.time("Winston-File");

// Define the log message
const logMessage = "This is a log message.";

// Log the message
for (let i = 0; i < iterations; i++) {
  logger.info(`${logMessage}:${i}`);
}

try {
  let uName = "Manas";
  uName = "Rahul";
} catch (err) {
  logger.error(err);
}
console.timeEnd("Winston-File");
