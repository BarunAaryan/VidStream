import mongoose from "mongoose";
import {DB_NAME} from "../constants.js"

//db is in another continent so async
const connectDB = async ()=>{
    try{
const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}`)
console.log(`\n Mongodb is connected DB HOST: ${connectionInstance.connection.host}`);
    }catch(error){
        console.log("MONGODB connection error", error);
        process.exit(1)
    }
}

export default connectDB