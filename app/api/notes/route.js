import { NextResponse } from "next/server";
import connectDB from "@/config/connectdb";
import Notes from "@/models/Notes";


export async function POST(req) {
    try {
        await connectDB(); //  Connect to DB

        const { content, writer } = await req.json(); //  Expect "content" from frontend
        const newNote = await Notes.create({ content, writer }); //  Save note
        return NextResponse.json({ message: "Note saved successfully!", note: newNote });
    } catch (error) {
        console.error("Error saving note:", error);
        return NextResponse.json({ error: "Failed to save note" }, { status: 500 });
    }
}

export async function GET() {
    await connectDB();
    const notes = await Notes.find();
    return NextResponse.json(notes)
}
