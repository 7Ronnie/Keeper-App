import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

  const [noteArray, setNoteArray] = useState([]);

  function addNote(note) {
    setNoteArray((prevValue) => {
      return [...prevValue, note];
    })
  }

  function deleteNote(id) {
   setNoteArray((prevValue) => {
    return  prevValue.filter((item, index) => {
        return index !== id;
      })
    })
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote}/>
      { noteArray.map((notes, index) => {
       return <Note key={index} id={index} title={notes.title} content={notes.content} onDelete={deleteNote}/>
      })
      }
      <Footer />
    </div>
  );
}

export default App;