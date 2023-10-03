import mongoose from "mongoose";

const articleschema = new mongoose.schema(
    {
        content: {
            type: string,
            required: [true, "content is required"],
        },
        conflicting: {
            type: boolean,
            default: false,
        },
    },
    { _id: false }
);

const newsschema = new mongoose.schema(
    {
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
    },
    { timestamps: true }
);

const news = mongoose.model("news", newsschema);

export default news;