import mongoose from "mongoose";

const notesSchema = new mongoose.Schema({
    content: String,
    writer: String,
})

const Notes = mongoose.models.Notes || mongoose.model("Notes", notesSchema)
export default Notes