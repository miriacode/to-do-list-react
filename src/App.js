import { useState } from 'react';
import './App.css';
import ToDoForm from './components/ToDoForm';
import ToDoTable from './components/ToDoTable';

function App() {

  const [db, setDb] = useState([]);
  const [idCounter, setIdCounter] = useState(1);

  const createTask = (task) => {
    task.id = idCounter;
    setDb([...db,task]);
    console.log(task)
    setIdCounter(idCounter+1);
  }

  const checkTask = (id) =>{
    db.map(task=>task.id===id? (task.isDone = !(task.isDone)):(null));
    setDb(db);
    console.log(db)
  }

  const deleteTask = (id) =>{
    let newDb = db.filter((task) => task.id !== id);
    setDb(newDb);
  }

  return (
    <div className="App">
      <h1>To Do App</h1>
      <ToDoForm createTask={createTask}></ToDoForm>
      <ToDoTable db={db} checkTask={checkTask} deleteTask={deleteTask}></ToDoTable>
    </div>
  );
}

export default App;
