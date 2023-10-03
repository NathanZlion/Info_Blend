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
Object.defineProperty(exports, "__esModule", { value: true });
exports.DummyNewsController = void 0;
const fixtures_barrel_js_1 = require("../utils/fixtures/fixtures_barrel.js");
class DummyNewsController {
    static getCuratedEvents(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            res.status(200).json(fixtures_barrel_js_1.curatedEventsList);
        });
    }
    static searchEventsByTopic(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            res.status(200).json(fixtures_barrel_js_1.curatedEventsList);
        });
    }
    static getEventDetail(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            res.status(200).json(fixtures_barrel_js_1.eventDetail);
        });
    }
    static compareArticles(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            res.status(200).json(fixtures_barrel_js_1.articlesComparision);
        });
    }
}
exports.DummyNewsController = DummyNewsController;
