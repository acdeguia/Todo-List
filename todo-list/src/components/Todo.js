import React, { useState } from "react";
import Edit from "../images/edit.svg";
import Delete from "../images/delete.svg";

export default function Todo(props) {
  const [isEditing, setEditing] = useState(false);

  const [newName, setNewName] = useState("");

  const [showConfirmation, setShowConfirmation] = useState(false);

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }


  function handleDelete(e) {
    props.deleteTask(props.id);
    setShowConfirmation(false);
  }

  function handleChange(e) {
    setNewName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (newName === "") {
      alert("empty");
    } else {
      props.editTask(props.id, capitalizeFirstLetter(newName));
      setNewName("");
      setEditing(false);
    }
  }

  const editingTemplate = (
    <form className="tasks" onSubmit={handleSubmit}>
      <div className="form-group">
        <label className="todo-label" htmlFor={props.id}></label>
        <input
          id={props.id}
          className="todo-text"
          placeholder={`Rename ` + props.name}
          type="text"
          value={newName}
          onChange={handleChange}
        />
      </div>
      <div className="edit-del">
        <button type="submit" className="save">
          Save
        </button>
        <button
          type="button"
          className="cancel-edit"
          onClick={() => setEditing(false)}
        >
          Cancel
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
        <div>{props.dueDate && props.dueDate.toDateString() } </div>
        
      </div>
      <div className="edit-del">
        <img alt="edit icon" src={Edit} onClick={() => setEditing(true)} />

        <img
          alt="delete icon"
          src={Delete}
          onClick={() => setShowConfirmation(true)}
        />
        {showConfirmation && (
          <div className="todo-pop-up">
            <p className="todo-header">DELETE TASK</p>
            <p className="task-name">{props.name}?</p>
            <div className="btn-grp">
              <button className="yes" onClick={handleDelete}>
                Yes
              </button>
              <button
                className="cancel"
                onClick={() => setShowConfirmation(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );

  return <li className="todo">{isEditing ? editingTemplate : viewTemplate}</li>;
}
