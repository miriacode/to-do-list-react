import React, { useState } from "react";

const initialForm = {
    id: null,
    content: "",
    isDone: false,
}


const ToDoForm = ({createTask}) => {
    const [form, setForm] = useState(initialForm);

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        })
    }
     
    const handleSubmit = (e) => {
       e.preventDefault();

       if(!form.content){
           alert("Incomplete data");
           return;
       }

       createTask(form);
       setForm(initialForm);
    }

    return (  
     <div>
        <form onSubmit={handleSubmit}>
            <input 
            type ="text"
            name = "content"
            placeholder = "Type your task here"
            onChange = {handleChange}
            value={form.content}
            />
            <input type="submit" value="Add"/>
        </form>
     </div>
    );
}
 
export default ToDoForm;