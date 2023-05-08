import React, { useState } from "react";
import Plus from '../images/plus.svg'

function Form(props) {
  const [showConfirmation, setShowConfirmation] = useState(false);

    const [name, setName] = useState('');

    function capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
  }

    function handleChange(e) {
        setName(e.target.value);
      }
    
      function handleSubmit(e) {
        e.preventDefault();

        if(name == ''){
          alert('empty')
        }else{
          props.addTask(capitalizeFirstLetter(name));
        }
        setName("");
      }

    return (
        <form onSubmit={handleSubmit}>
          {/* <h2 className="label-wrapper">
            <label htmlFor="new-todo-input" className="label__lg">
              What needs to be done?
            </label>
          </h2> */}
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
          <button type="submit" className="btn btn__primary btn__lg">
          <img alt="add button" src={Plus} />
          </button>
        </form>
      );
}

export default Form;