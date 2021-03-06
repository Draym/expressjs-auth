const express = require('express');

const router = express.Router();
const swaggerUi = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');

const swaggerDefinition = {
    swagger: '2.0',
    info: {
        title: 'ExpressJs-Auth',
        version: '1.0.0',
        description: 'This is a REST API application made with Express which define a boilerplate for JWT Authentication concepts.',
        contact: {
            name: 'Kevin Andres',
            url: 'https://github.com/Draym',
        },
    },
    servers: [
        {
            url: 'http://localhost:3000/api',
            description: 'Development server',
        },
        {
            url: 'https://expressjs-auth-backend.herokuapp.com/api',
            description: 'Production server',
        },
    ],
};

const options = {
    swaggerDefinition,
    apis: ['./src/routes/*.js']
};

const swaggerSpec = swaggerJSDoc(options);

router.use('/', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

module.exports = router;