import React, { useState } from "react";
import Plus from "../images/plus.svg";

function Form(props) {
  const [name, setName] = useState("");

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
        className="input input__lg"
        name="text"
        autoComplete="off"
        value={name}
        onChange={handleChange}
      />
      <button type="submit" className="btn btn_add">
        <img alt="add button" src={Plus} />
      </button>
    </form>
  );
}

export default Form;
