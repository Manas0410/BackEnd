const iterations = 100000;

console.time("Console");
const logMessage = "This is a log message.";

// Log the message
for (let i = 0; i < iterations; i++) {
  console.log({
    level: "info",
    message: logMessage,
  });
}

console.timeEnd("Console");
