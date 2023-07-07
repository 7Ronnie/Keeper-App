import React from 'react';
import './App.css';
import Footer from './Footer';
import Header from './Header';
import Note from './Note';
import notes from '../notes';

function App() {
  return (
  <div>
    <Header />
  {notes.map((item) => (
   <Note key={item.key}
   title={item.title}
   content={item.content}/> 
  ))}
    <Footer />
  </div>
)
}

export default App;
