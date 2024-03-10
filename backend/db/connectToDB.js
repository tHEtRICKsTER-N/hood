import mongoose, { mongo } from "mongoose";

const connectToDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB_URI)
        console.log("Connected to Mongo DB")
    } catch (error) {
        console.log("Erroro connecting ot MongoDB", error.message)
    }
}

export default connectToDB;