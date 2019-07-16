"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class PeopleRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        const request = require('request-promise');
        const RUTA = 'https://swapi.co/api/people';
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
const peopleRoutes = new PeopleRoutes();
exports.default = peopleRoutes.router;
