import { useState } from 'react';
import './App.css';
import ToDoForm from './components/ToDoForm';
import ToDoTable from './components/ToDoTable';

//Bonus Sensei
const ToDoStorage = require('./components/storage/ToDoStorage')

function App() {

  //Bonus Sensei
  const toDoStorage = new ToDoStorage("key");

  const [db, setDb] = useState(toDoStorage.getTasks());
  const [idCounter, setIdCounter] = useState(1);

  const createTask = (task) => {
    task.id = idCounter;
    setDb([...db,task]);
    console.log(task)
    setIdCounter(idCounter+1);
    //Bonus Sensei:
    toDoStorage.saveTasks([...db,task])    
  }

  const checkTask = (id) =>{
    db.map(task=>task.id===id? (task.isDone = !(task.isDone)):(null));
    setDb(db);
    console.log(db)

    //Bonus Sensei:
    toDoStorage.saveTasks(db)  
  }

  const deleteTask = (id) =>{
    let newDb = db.filter((task) => task.id !== id);
    setDb(newDb);

    //Bonus Sensei:
    toDoStorage.saveTasks(newDb)  
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
