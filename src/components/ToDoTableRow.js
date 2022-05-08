import React, { useState }  from "react";
import './ToDoTableRow.css'

const ToDoTableRow = ({task, checkTask, deleteTask}) => {
    let {id, content, isDone} = task;

    const [isChecked, setIsChecked] = useState(isDone)

    const handleIsDone = () => {
        checkTask(id);
        setIsChecked(!isChecked);
    }

    return (
        <tr>
            <td>
                <label htmlFor="isDone" className={isDone?"line-through":"line-none"}>{content}</label>
                <input
                type="checkbox"
                id="isDone"
                name="isDone"
                onChange={handleIsDone}
                checked={isDone}
                />
        
            </td>
            <td>
                <button onClick={() => deleteTask(id)}>Delete</button>
            </td>
        </tr>
    );
}
 
export default ToDoTableRow;