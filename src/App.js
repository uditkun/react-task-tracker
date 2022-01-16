import { useState } from "react";
import Header from "./components/Header";
import AddForm from "./components/AddForm";
import Tasks from "./components/Tasks";

function App() {
  const [showAddForm, setShowAddForm] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors Appointment",
      day: "Feb 5th at 2:30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Meeting at School",
      day: "Feb 5th at 2:30pm",
      reminder: true,
    },
    {
      id: 3,
      text: "Food Shopping",
      day: "Feb 5th at 2:30pm",
      reminder: false,
    },
  ]);

  const addForm = (task) => {
    const id = Math.floor(Math.random() * 1000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="container">
      <Header
        title="Task Tracker"
        showAdd={() => setShowAddForm(!showAddForm)}
        show={showAddForm}
      />
      {showAddForm && <AddForm add={addForm} />}
      {tasks.length === 0 ? (
        "No tasks to show"
      ) : (
        <Tasks tasks={tasks} deleteT={deleteTask} toggleRem={toggleReminder} />
      )}
    </div>
  );
}

export default App;
