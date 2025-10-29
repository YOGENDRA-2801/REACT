import mongoose from 'mongoose';

const uri = "mongodb://localhost:27017/user";

const connectToMongoose = () => {
    mongoose.connect(uri)
        .then(() => console.log("MongoDB connected"))
        .catch(err => console.log("Error:", err));
}

export default connectToMongoose;