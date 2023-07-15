import React, { useState } from "react";
// import Edit from "../images/edit.svg";
// import Delete from "../images/delete.svg";

interface TodoProps {
  id: string;
  name: string;
  completed: boolean;
  deleteTask: (id: string) => void;
  toggleTaskCompleted: (id: string) => void;
  editTask: (id: string, newName: string) => void;
}

export default function Todo(props: TodoProps) {
  const [isEditing, setEditing] = useState(false);
  const [newName, setNewName] = useState("");
  const [showConfirmation, setShowConfirmation] = useState(false);

  function capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  function handleDelete() {
    props.deleteTask(props.id);
    setShowConfirmation(false);
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setNewName(e.target.value);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
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
      </div>
      <div className="edit-del">
        {/* <img alt="edit icon" src={Edit} onClick={() => setEditing(true)} /> */}
        <button onClick={() => setEditing(true)}>EDIT</button>
        {/* <img
          alt="delete icon"
          src={Delete}
          onClick={() => setShowConfirmation(true)}
        /> */}
        <button onClick={() => setShowConfirmation(true)}>DELETE</button>
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
