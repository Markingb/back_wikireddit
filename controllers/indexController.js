"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexController = void 0;
class IndexController {
    index(req, res) {
        res.send('Hola, Bienvenue to Index');
    }
}
exports.indexController = new IndexController();
