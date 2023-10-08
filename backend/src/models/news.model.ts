import mongoose, {Document} from "mongoose";
//CAMEL CASED AND MADE MINOR SPELLING CORRECTIONS
//DID'NT EXTEND MONGOOSE DOCUMENT BECAUSE NO USE FOR _id

export interface ArticleDocument {
    content:string,
    conficting:boolean
}

const articleSchema = new mongoose.Schema(
    {
        content: {
            type: String,
            required: [true, "content is required"],
        },
        conflicting: {
            type: Boolean,
            default: false,
        },
    },
    { _id: false }
);


export interface NewsDocument  extends Document{
    sourceName:string,
    url:string,
    articles:ArticleDocument[]
}

const newsSchema = new mongoose.Schema(
    {
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
    },
    { timestamps: true }
);

const news = mongoose.model<NewsDocument>("news", newsSchema);

export default news;