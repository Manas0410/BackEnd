import express, { Router } from "express";
import todoValidator from "./todos.validator";
import todoController from "./todos.controller";

const todoRoute: Router = express.Router();

todoRoute.get("/:id", todoValidator, todoController);

export default todoRoute;
