import { useState } from "react";

function AddForm({ add }) {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!text && !day) {
      alert("Please enter Task and Date");
      return;
    }
    add({ text, day, reminder });
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Task</label>
        <input
          type="text"
          placeholder="Enter task"
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
      </div>
      <div className="form-control">
        <label>Date and Time</label>
        <input
          type="text"
          placeholder="Enter date"
          onChange={(e) => {
            setDay(e.target.value);
          }}
        />
      </div>
      <div className="form-control-check">
        <label>Set Reminder</label>
        <input
          type="checkbox"
          onChange={(e) => {
            console.log(e.currentTarget.checked);
            setReminder(!reminder);
          }}
        />
      </div>
      <input className="btn btn-block" type="submit" value="Submit" />
    </form>
  );
}

export default AddForm;
