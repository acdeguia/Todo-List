import React, { useState } from "react";
import Edit from '../images/edit.svg'
import Delete from '../images/delete.svg'

export default function Todo(props) {
  const [isEditing, setEditing] = useState(false);

  const [newName, setNewName] = useState("");

  function handleChange(e) {
    setNewName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.editTask(props.id, newName);
    setNewName("");
    setEditing(false);
  }

  const editingTemplate = (
    <form className="tasks" onSubmit={handleSubmit}>
      <div className="form-group">
        <label className="todo-label" htmlFor={props.id}>
          New name for {props.name}
        </label>
        <input
          id={props.id}
          className="todo-text"
          type="text"
          value={newName}
          onChange={handleChange}
        />
      </div>
      <div className="edit-del">
        <button
          type="button"
          className="btn todo-cancel"
          onClick={() => setEditing(false)}
        >
          Cancel
          {/* <span className="visually-hidden">renaming {props.name}</span> */}
        </button>
        <button type="submit" className="btn btn__primary todo-edit">
          Save
          {/* <span className="visually-hidden">new name for {props.name}</span> */}
        </button>
      </div>
    </form>
  );
  const viewTemplate = (
    <div className="tasks">
      <div className="task">
        <input
          id={props.id}
          type="checkbox"
          defaultChecked={props.completed}
          onChange={() => props.toggleTaskCompleted(props.id)}
        />
        <label className="todo-label" htmlFor={props.id}>
          {props.name}
        </label>
      </div>
      <div className="edit-del">
       
        <img src={Edit} onClick={() => setEditing(true)} />
        
        
          <img src={Delete}  onClick={() => props.deleteTask(props.id)} />

        
      </div>
    </div>
  );

  return <li className="todo">{isEditing ? editingTemplate : viewTemplate}</li>;
}
