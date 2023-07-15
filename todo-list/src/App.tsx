import React, { useState } from "react";
import Todo from "./components/Todo";
import Form from "./components/Form";
import Filter from "./components/Filter";
import { nanoid } from "nanoid";
import SideNav from "./components/SideNav";

interface Task {
  id: string;
  name: string;
  priority: string;
  completed: boolean;
}

const FILTER_MAP: Record<string, (task: Task) => boolean> = {
  All: () => true,
  Active: (task) => !task.completed,
  Completed: (task) => task.completed
};

const FILTER_NAMES = Object.keys(FILTER_MAP) as Array<keyof typeof FILTER_MAP>;

interface AppProps {
  tasks: Task[];
}

function App(props: AppProps) {
  const [tasks, setTasks] = useState<Task[]>(props.tasks);

  function addTask(name: string, priority: string) {
    const newTask: Task = {
      id: `todo-${nanoid()}`,
      name,
      priority,
      completed: false
    };

    setTasks([...tasks, newTask]);
    console.log(newTask)
  }

  function deleteTask(id: string) {
    const remainingTasks = tasks.filter((task) => id !== task.id);
    setTasks(remainingTasks);
  }

  function editTask(id: string, newName: string) {
    const editedTaskList = tasks.map((task) => {
      if (id === task.id) {
        return { ...task, name: newName };
      }
      return task;
    });
    setTasks(editedTaskList);
  }

  function toggleTaskCompleted(id: string) {
    const updatedTasks = tasks.map((task) => {
      if (id === task.id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  }

  const [filter, setFilter] = useState<keyof typeof FILTER_MAP>("All");

  const taskList = tasks
    .filter(FILTER_MAP[filter])
    .map((task) => (
      <Todo
        id={task.id}
        name={task.name}
        priority={task.priority}
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

  const tasksNoun = taskList.length !== 1 && taskList.length !== 0 ? "TASKS" : "TASK";
  const total = `Total: ${taskList.length}`;

  return (
    <div className="todoapp stack-large">
     <SideNav />
      <div className="main">
        <div className="inbox">
          <div className="inbox_icon">
            <h2>Inbox</h2>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M0.474407 0C0.19975 0 0 0.19975 0 0.474407V19.5256C0 19.8002 0.19975 20 0.474407 20H19.5256C19.8002 20 20 19.8002 20 19.5256V0.474407C20 0.19975 19.8002 0 19.5256 0L0.474407 0ZM2.49688 4.99376H17.4782V12.4844H14.9813L12.4844 14.9813H7.49064L4.99376 12.4844H2.49688V4.99376Z"
                fill="#074F60"
              />
            </svg>
          </div>
          <h3>{total}</h3>
        </div>
        <div className="filters btn-group ">{filterList}</div>
        <div className="task_heading">
          <p>TASK</p>
          <div className="flex edit_del">
            <p>EDIT</p>
            <p>DELETE</p>
          </div>
        </div>
        <ul className="todo-list" aria-labelledby="list-heading">
          {taskList}
        </ul>
        <Form addTask={addTask} />
       
      </div>
    </div>
  );
}

export default App;
