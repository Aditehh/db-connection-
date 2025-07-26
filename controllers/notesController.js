// import { connectToDB } from "@/lib/mongodb";
// import Notes from "@/models/notes";

// export async function POST(req) {
//     try {
//         await connectToDB(); // connect to MongoDB

//         const { form } = await req.json(); // parse body
//         const newNote = await Notes.create({ content: form });

//         return Response.json(newNote, { status: 201 });
//     } catch (err) {
//         console.error(err);
//         return Response.json({ error: "Failed to save note" }, { status: 500 });
//     }
// }
