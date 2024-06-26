const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const { endpoint } = require('../config/index');
const route = require('../src/routes/index');


module.exports = () => {
    app = express();
    app.use(cors());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    app.use((error, request, response, next) => {
        if (error != null) {
            return response.json({
                status: 401,
                message: "Invalid Json"
            });
        }
    });
    app.use(endpoint, route);
    return app;
};

