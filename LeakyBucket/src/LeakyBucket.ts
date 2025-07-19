import { Request, Response, NextFunction } from "express";

const bucketCapacity = 5;
const leakRate = 1;
const interval = 5000;

let bucketSize = 0;
let lastProcessedTime = Date.now();

export const leakyBucket = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const currentTime = Date.now();
  const delayTimeBetweenPreviousReq = currentTime - lastProcessedTime;

  const leakedRequests =
    Math.floor(delayTimeBetweenPreviousReq / interval) * leakRate;

  bucketSize = Math.max(0, bucketSize - leakedRequests);

  lastProcessedTime = currentTime - (delayTimeBetweenPreviousReq % interval);

  if (bucketSize < bucketCapacity) {
    bucketSize += 1;
    next();
  } else {
    // If the bucket is full, reject the request or queue them or whatever u want
    res.status(429).send("Too Many Requests");
  }
};
