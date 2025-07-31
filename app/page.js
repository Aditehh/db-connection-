"use client"
import React, { useEffect } from "react";
import { useState } from "react";

export default function Home() {

  const [form, setform] = useState("")
  const [author, setauthor] = useState("")
  const [notes, setnotes] = useState([])

  const handlesubmit = async (e) => {
    console.log(form)
    console.log(author)

    e.preventDefault(); //prevents the page to reload again 

    // try {
    const res = await fetch("/api/notes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ content: form, writer: author })
    });

    //   const data = await res.json();
    //   if (!res.ok) throw new Error(data.error || "Something went wrong")
    // }
    // catch (error) {
    //   console.log("nono")
    // }

    const newNote = await res.json();
    setnotes([data.note, ...notes])
    setauthor("")
    setform("")
    console.log(notes)
  }

  useEffect(() => {
    const fetchNotes = async () => {
      const res = await fetch("api/notes");
      const data = await res.json();
      setnotes(data)
    };
    fetchNotes();
  }, [])







  return (
    <>
      <div>
        <label htmlFor="first_name" className="block mb-2 px-14-12 text-sm font-medium text-gray-900 dark:text-white">upload the note/memo</label>


        <div className="px-10">
          <input
            onChange={(e) => setform(e.target.value)}
            type="text" value={form} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-100 p-2.5 dark:bg-gray-700" placeholder="John" required />
        </div>

        <div className="px-10">
          <input
            onChange={(e) => setauthor(e.target.value)}
            type="text" value={author} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-100 p-2.5 dark:bg-gray-700" placeholder="author" required />
        </div>

        <div className="py-2">
          <button onClick={handlesubmit} type="submit">
            save
          </button>
        </div>

        <div>

            <ul>
            {notes.map((note, _id) => (
              <li key={_id} className="border p-2 my-2">
                <p className="font-semibold">{note.content}</p>
                <p className="text-sm text-gray-500">— {note.writer}</p>
              </li>
            ))}
          </ul> 

        </div>




      </div>
    </>
  );
}
