"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class IndexController {
    index(req, res) {
        res.send('{"text":"API Is /api/people"}');
    }
}
exports.indexController = new IndexController();
