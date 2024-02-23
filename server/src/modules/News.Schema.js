import mongoose from "mongoose";

const newsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    enum: [
      "Politics",
      "Sports",
      "Entertainment",
      "Technology",
      "Health",
      "Business",
      "Other",
    ],
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

export const News = mongoose.model("News", newsSchema);
