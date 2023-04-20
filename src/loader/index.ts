import { Express } from "express";
import expressLoader from "./Express";

const loader = async (app: Express) => {
  await expressLoader(app);
};

export default loader;
