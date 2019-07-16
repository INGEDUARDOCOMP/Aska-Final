"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class NextRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
        this.nextone();
    }
    config() {
    }
    nextone() {
        const request = require('request-promise');
        const RUTA = 'https://swapi.co/api/people/?page=3';
        request({
            uri: RUTA,
            method: 'GET',
            json: true,
        }).then(Peoples => {
            this.router.get('/', (req, res) => {
                res.send(Peoples);
            });
        });
    }
}
const nextRoutes = new NextRoutes();
exports.default = nextRoutes.router;
