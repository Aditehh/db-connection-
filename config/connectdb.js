import mongoose from "mongoose";

// const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/notes-api");
        console.log('MongoDB connected');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

export default connectDB;



