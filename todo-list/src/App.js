import React, { useState } from "react";
import Todo from "./components/Todo";
import Form from "./components/Form";
import Filter from "./components/Filter";
import { nanoid } from "nanoid";



const FILTER_MAP = {
  All: () => true,
  Active: (task) => !task.completed,
  Completed: (task) => task.completed
};

const FILTER_NAMES = Object.keys(FILTER_MAP);



function App(props) {
  const [tasks, setTasks] = useState(props.tasks);

  function addTask(name) {
    const newTask = { id: `todo-${nanoid()}`, name, completed: false };
    setTasks([...tasks, newTask]);
  }


  function deleteTask(id) {
    const remainingTasks = tasks.filter((task) => id !== task.id);
    setTasks(remainingTasks);
  }

  function editTask(id, newName) {
    const editedTaskList = tasks.map((task) => {
    // if this task has the same ID as the edited task
      if (id === task.id) {
        //
        return {...task, name: newName}
      }
      return task;
    });
    setTasks(editedTaskList);
  }

  function toggleTaskCompleted(id) {
    const updatedTasks = tasks.map((task) => {
      if (id === task.id) {
        return {...task, completed: !task.completed}
      }
      return task;
    });
    setTasks(updatedTasks);
  }

  const [filter, setFilter] = useState('All');

  const taskList = tasks
  .filter(FILTER_MAP[filter])
  .map((task) => (
    <Todo
      id={task.id}
      name={task.name}
      completed={task.completed}
      key={task.id}
      toggleTaskCompleted={toggleTaskCompleted}
      deleteTask={deleteTask}
      editTask={editTask}
    />
  ));

  const filterList = FILTER_NAMES.map((name) => (
    <Filter
      key={name}
      name={name}
      isPressed={name === filter}
      setFilter={setFilter}
    />
  ));

  const tasksNoun = taskList.length !== 1 && taskList.length !== 0 ? 'TASKS' : 'TASK';
  const headingText = `TOTAL: ${taskList.length}`;

  return (
    <div className="todoapp stack-large">
      
      <div className="side-nav">
        <h1>ToDue</h1>
        
      </div>
      <div className="main">
      <div className="filters btn-group stack-exception">
        {filterList}
        </div>
        
       
        <div className="tasks-heading">
          <h4>{tasksNoun}</h4>
          <div>
            <h4>EDIT</h4>
            <h4>DELETE</h4>
          </div>
        </div>
        <ul
          role="list"
          className="todo-list stack-large stack-exception"
          aria-labelledby="list-heading"
        >
          {taskList}
        </ul>
        <Form addTask={addTask} />
        <h2 id="list-heading">{headingText}</h2>
        
      </div>
    </div>
  );
}

export default App;