import React from 'react'
import { collection, addDoc } from "firebase/firestore";
import { db } from './config/firebase'

function AddTask() {
    const [task, setTask] = useState({
        name: '',
        description: '',
        status: 'pending'
      });
      const addTask = async () => {
        try {
          const docRef = await addDoc(collection(db, "tasks"), {
            name: task.name,
            description: task.description,
            status: task.status
          });
          console.log("Document written with ID: ", docRef.id);
          setTask({
            name: '',
            description: '',
          })
        } catch (e) {
          console.error("Error adding document: ", e);
        }
      }
      return (
        <div className="App">
          <h1>Add Task</h1>
          <form>
            <input type="text" name="name" id="name"
              value={task.name}
              placeholder="Name"
              onChange={(e) => setTask({ ...task, name: e.target.value })}
            />
            <input type="text" name="description" id="description"
              placeholder='Description'
              value={task.description}
              onChange={(e) => setTask({ ...task, description: e.target.value })}
            />
          </form>
          <button
            onClick={addTask}
          >Add Task</button>
        </div>
      )
}

export default AddTask