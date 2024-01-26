import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";
// import { version } from "../package.json" assert { type: 'json' };
import log from '../conf/log.js';

const options = {
  definition: {
    openapi: "3.0.3",
    info: {
      title: "TODO API Documentation",
      version: "1.0.0",
      description: "API Documentation for the Todo API"
    },
    servers: [
        {
            url: "http://localhost:8000/todos"
        }
    ],
  },
  apis: ["../routes/*.js"],
};

const swaggerSpec = swaggerJsdoc(options);

const swaggerDocs = (app, port) => {
  // Swagger page
  app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

  // Docs in JSON format
  app.get("/api/docs.json", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.send(swaggerSpec);
  });

  log.info(`Docs available at http://localhost:${port}/api/docs`);
}

export default swaggerDocs;