import Task from "./Task";

function Tasks({ tasks, deleteT, toggleRem }) {
  return (
    <>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          deleteT={deleteT}
          toggleRem={toggleRem}
        />
      ))}
    </>
  );
}

export default Tasks;
