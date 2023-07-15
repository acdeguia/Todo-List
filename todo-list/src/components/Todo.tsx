import React, { useState } from "react";

interface TodoProps {
  id: string;
  name: string;
  priority: string;
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
    <form className={`tasks`} onSubmit={handleSubmit}>
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
    <div className={`tasks ${props.priority}`}>
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
        {/* <button onClick={() => setEditing(true)}>EDIT</button> */}


        <svg onClick={() => setEditing(true)} width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.88 24.84V26.44H0V24.84H7.88ZM15.7511 24.84V26.44H7.87109V24.84H15.7511ZM23.6222 24.84V26.44H15.7422V24.84H23.6222Z" fill="#074F60" />
          <path d="M25.75 0.5L23.125 2.97917L28.375 7.9375L31 5.45833L25.75 0.5ZM20.5 5.45833L10 15.375V20.3333H15.25L25.75 10.4167L20.5 5.45833Z" fill="#074F60" />
        </svg>



        {/* <button onClick={() => setShowConfirmation(true)}>DELETE</button> */}

        <svg onClick={() => setShowConfirmation(true)} width="20" height="23" viewBox="0 0 20 23" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.57143 0.0714417C7 0.0714417 5.71429 1.35716 5.71429 2.92858H2.85714C1.28571 2.92858 0 4.2143 0 5.78573H20C20 4.2143 18.7143 2.92858 17.1429 2.92858H14.2857C14.2857 1.35716 13 0.0714417 11.4286 0.0714417H8.57143ZM2.85714 8.64287V22.3857C2.85714 22.7 3.08571 22.9286 3.4 22.9286H16.6286C16.9429 22.9286 17.1714 22.7 17.1714 22.3857V8.64287H14.3143V18.6429C14.3143 19.4429 13.6857 20.0714 12.8857 20.0714C12.0857 20.0714 11.4571 19.4429 11.4571 18.6429V8.64287H8.6V18.6429C8.6 19.4429 7.97143 20.0714 7.17143 20.0714C6.37143 20.0714 5.74286 19.4429 5.74286 18.6429V8.64287H2.88571H2.85714Z" fill="#074F60" />
        </svg>



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
