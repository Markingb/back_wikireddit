"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//import nameimage from '../routes/photoRoutes'
const multer_1 = __importDefault(require("../lib/multer"));
class PhotoController {
    nimage(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const nameimage = multer_1.default.single('image');
                console.log(nameimage);
                res.json("nameimage");
            }
            catch (e) {
                res.json({ text: e.name + e.message });
            }
        });
    }
}
const photoController = new PhotoController();
exports.default = photoController;
