import { Router } from "express";
import ApiTimeOutMiddleWare from "../Middleware/middleware.apiTimeOut";
import TimeoutTestControllerApi from "./route.controller";

const route = Router();

route.get("/", ApiTimeOutMiddleWare(100), TimeoutTestControllerApi);
// if not using for all api can use like this specifically
// route.get("/", TimeoutTestControllerApi);

export default route;
