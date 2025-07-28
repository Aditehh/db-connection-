import { NextResponse } from "next/server";
import connectDB from "@/config/connectdb";
import Notes from "@/models/Notes";

export async function DELETE(id, { params }) {
    await connectDB();
    const { id } = params;
    await Notes.findByIdAndDelete()
    return NextResponse.json({ message: "deleted successfully" })
}



