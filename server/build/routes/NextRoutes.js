"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class NextRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
        this.id = '2';
    }
    config() {
        const request = require('request-promise');
        const RUTA = 'http://swapi.co/api/people/?page=2';
        request({
            uri: RUTA,
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
