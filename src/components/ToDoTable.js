import React from "react";
import ToDoTableRow from "./ToDoTableRow";

const ToDoTable = ({db, checkTask, deleteTask}) => {
    return (
        <div className="center">
            <table>
                <tbody>
                    {db.length > 0 ? (
                       db.map(task => <ToDoTableRow task={task} checkTask={checkTask} deleteTask={deleteTask}></ToDoTableRow> )
                    ):(
                        <tr>
                            <td>There are no tasks yet.</td>
                        </tr>
                    )
                    }
                </tbody>
            </table>
        </div>
    );
}
 
export default ToDoTable;