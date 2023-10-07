"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const articleSchema = new mongoose_1.default.Schema({
    content: {
        type: String,
        required: [true, "content is required"],
    },
    conflicting: {
        type: Boolean,
        default: false,
    },
}, { _id: false });
const newsSchema = new mongoose_1.default.Schema({
    sourceName: {
        type: String,
        required: [true, "news source is required"],
    },
    url: {
        type: String,
        required: [true, "a url to the news article is required for further reading"],
    },
    articles: {
        type: [articleSchema],
        default: [],
    },
}, { timestamps: true });
const news = mongoose_1.default.model("news", newsSchema);
exports.default = news;
