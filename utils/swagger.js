const swaggerJsDoc = require("swagger-jsdoc");
const path = require("path");

const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "Star Wars API",
      version: "1.0.0",
    },
    servers: [
      {
        url: "https://kx4st4km7k.execute-api.us-east-1.amazonaws.com/dev",
      },
    ],
  },
  apis: [`${(path.join(__dirname), "./routes/routes.js")}`],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

module.exports = swaggerDocs;
