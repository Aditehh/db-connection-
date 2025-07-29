"use client"
import React from "react";
import { useState } from "react";

export default function Home() {

  const [form, setform] = useState("")
  const [author, setauthor] = useState("")

  const handlesubmit = async (e) => {
    console.log(form)
    console.log(author)

    e.preventDefault(); //prevents the page to reload again 

    try {
      const res = await fetch("/api/notes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content: form, writer: author })
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong")
    }
    catch (error) {
      console.log("nono")
    }
  }

  



  return (
    <>
      <div>
        <label htmlFor="first_name" className="block mb-2 px-14-12 text-sm font-medium text-gray-900 dark:text-white">upload the note/memo</label>
        <form action="">

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

        
        </form>



      </div>
    </>
  );
}
