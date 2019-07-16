"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const request = require('request-promise');
const RUTA = 'https://swapi.co/api/people';
const router = express_1.Router();
class PeopleController {
    peoples() {
        request({
            uri: RUTA,
            json: true,
        }).then(Peoples => {
            router.get('/', (req, res) => {
                res.send(Peoples);
            });
        });
    }
}
exports.peopleController = new PeopleController();
;
