import { Express } from "express";

import expressLoader from "./express";

const loader = async (app: Express) => {
  await expressLoader(app);
};

export default loader;
