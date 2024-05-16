import winston from "winston";
import { LOG_FILE_NAME } from "./logging.config";

const logger = winston.createLogger({
  transports: [
    new winston.transports.File({
      filename: LOG_FILE_NAME,
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json()
      ),
    }),
  ],
});

export default logger;
