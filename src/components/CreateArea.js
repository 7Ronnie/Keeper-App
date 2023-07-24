import React, { useState } from "react";

const CreateArea = (props) => {
    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    function handleChange(e){
      const {name, value} = e.target;

      setNote((prevValue) => {
        return {
        ...prevValue, 
        [name]:value
    }
      });
    }

    function handleClick(e) {
        props.onAdd(note);
        setNote({
            title: "",
            content: ""
        })
        e.preventDefault();
    }

return <div>
    <form >
        <input 
            onChange={handleChange} 
            value={note.title}
            type="text" 
            name="title" 
            placeholder="title" />
        <textarea 
            onChange={handleChange} 
            value={note.content}
            name="content" 
            placeholder="Take a note.." 
            rows="3"></textarea>
        <button onClick={handleClick}>Add</button>
    </form>
</div>
}

export default CreateArea;