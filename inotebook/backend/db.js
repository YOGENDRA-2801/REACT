import mongoose from 'mongoose';

const uri = "mongodb://localhost:27017/inotebook"; 
// db mene pahle-se Mongo-Compass m create nahi ki thi 
// db ka naam mene code m dala "pahle" else string to bus ...27017/ hi thi

const connectToMongoose = () => {
    mongoose.connect(uri)
        .then(() => console.log("MongoDB connected"))
        .catch(err => console.log("Error:", err));
}

export default connectToMongoose;
