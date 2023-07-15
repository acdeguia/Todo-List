import React, { useState } from "react";
// import Plus from "../images/plus.svg";
// import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface FormProps {
  addTask: (name: string, priority:string) => void;
}

function Form(props: FormProps) {
  const [name, setName] = useState("");
  const [priority, setPriority] = useState("");

  function capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setName(e.target.value);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (name === "") {
      alert("empty");
    } else {
      props.addTask(capitalizeFirstLetter(name), priority);
     // props.addTask(priority);
    }
    setName("");
    setPriority("")
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Add task"
        type="text"
        id="new-todo-input"
        className="input"
        name="text"
        autoComplete="off"
        value={name}
        onChange={handleChange}
      />
      <select
      className="option-priority"
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        required
      >
        <option value="">Select Priority</option>
        <option id="low" value="low">Low</option>
        <option id="medium" value="medium">Medium</option>
        <option id="high" value="high">High</option>
      </select>
      <button type="submit" className="btn btn_add">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.5 0V7.5H0V12.5H7.5V20H12.5V12.5H20V7.5H12.5V0H7.5Z" fill="#074F60"/>
</svg>
      </button>
    </form>
  );
}

export default Form;
