import { NextResponse } from "next/server";
import connectDB from "@/config/connectdb";
export async function DELETE(req, { params }) {


    await connectDB();
    const { id } = params;
    await Notes.findByIdAndDelete(id);
    return NextResponse.json({ message: "Deleted successfully" });


}
