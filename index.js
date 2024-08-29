const express = require("express");
const serverless = require("serverless-http");
const swaggerUi = require("swagger-ui-express");
const characterRoutes = require("./routes/routes");
const swaggerDocs = require("./utils/swagger");

const app = express();
app.use(express.json());

app.use("", characterRoutes);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

module.exports.handler = serverless(app);
