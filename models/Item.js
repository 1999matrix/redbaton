import mongoose from "mongoose";

const newsItemSchema = new mongoose.Schema({
    title: String,
    url: String,
    hackerNewsUrl: String,
    postedOn: String,
    upvotes: String,
    comments: String,
  });
  
 export default mongoose.model('Item', newsItemSchema);
