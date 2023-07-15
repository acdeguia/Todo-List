import React, { useState } from "react";
// import Plus from "../images/plus.svg";
// import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface FormProps {
  addTask: (name: string) => void;
}

function Form(props: FormProps) {
  const [name, setName] = useState("");

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
      props.addTask(capitalizeFirstLetter(name));
    }
    setName("");
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
      <button type="submit" className="btn btn_add">
        {/* <img alt="add button" src={Plus} /> */}
        ADD
      </button>
    </form>
  );
}

export default Form;
