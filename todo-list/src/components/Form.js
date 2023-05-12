import React, { useState } from "react";
import Plus from "../images/plus.svg";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function Form(props) {
  const [name, setName] = useState("");
  const [dueDate, setDueDate] = useState(null);

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  function handleChange(e) {
    setName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (name === "") {
      alert("empty");
    } else {
      props.addTask(name, dueDate);
    }
    setName("");
    setDueDate(null);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Add task"
        type="text"
        id="new-todo-input"
        className="input input__lg"
        name="text"
        autoComplete="off"
        value={name}
        onChange={handleChange}
      />
      <DatePicker
        selected={dueDate} // Set the selected date
        onChange={(date) => setDueDate(date)} // Update the dueDate state
        placeholderText="Select due date"
      />
      <button type="submit" className="btn btn_add">
        <img alt="add button" src={Plus} />
      </button>
    </form>
  );
}

export default Form;
