import mongoose from "mongoose";

const { Schema } = mongoose; // destructuring - Mongoose object se Schema property nikal rahe ho; bina iske aesa likhna hoga mongoose.Schema(...)

const UserSchema = new Schema({
  name: { type: String, required: true }, // required use hoga - yeh Mongoose ka validation property hai; (not require)
  email: { type: String, required: true, unique: true }, // type, required, default,... are reserved keyword not userdefined
  password: { type: String, required: true },
  date: { 
    type: Date, 
    default: Date.now // now() aesa mat daalna , hum yaha function ki body pass kr rhe hai 
    }
});

export default mongoose.model('user', UserSchema);