import mongoose from "mongoose";

const notesSchema = new mongoose.Schema({

    content: {type: String, required: true}
})

const Notes = mongoose.models.Notes || mongoose.model("Notes", notesSchema)
export default Notes