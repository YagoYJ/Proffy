import express from "express";
import ClassesController from "./controllers/ClassesController";
import ConnectionsController from "./controllers/ConnectionsController";

const classesControllers = new ClassesController();
const connectionsController = new ConnectionsController();

const routes = express.Router();

routes.post("/classes", classesControllers.create);
routes.get("/classes", classesControllers.index);

routes.post("/connections", connectionsController.create);
routes.get("/connections", connectionsController.index);

export default routes;
