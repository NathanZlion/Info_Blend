"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const articleschema = new mongoose_1.default.schema({
    content: {
        type: string,
        required: [true, "content is required"],
    },
    conflicting: {
        type: boolean,
        default: false,
    },
}, { _id: false });
const newsschema = new mongoose_1.default.schema({
    sourcename: {
        type: string,
        required: [true, "news source is required"],
    },
    url: {
        type: string,
        required: [true, "a url to the news article is required for further reading"],
    },
    article: {
        type: [articleschema],
        default: [],
    },
}, { timestamps: true });
const news = mongoose_1.default.model("news", newsschema);
exports.default = news;
