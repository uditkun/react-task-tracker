function Task({ task, deleteT, toggleRem }) {
  return (
    <div
      className={`task ${task.reminder && "reminder"}`}
      onDoubleClick={() => toggleRem(task.id)}
    >
      <div className="flexing">
        <h3>{task.text}</h3>
        <div className="cros" onClick={() => deleteT(task.id)}></div>
      </div>
      <p>{task.day}</p>
    </div>
  );
}

export default Task;
