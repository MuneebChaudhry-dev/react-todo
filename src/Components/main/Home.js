import Tasks from "../Task/Tasks";
import AddTask from "../Task/AddTask";
import { useState, useEffect } from "react";
import Header from "../common/Header";
import Button from "../common/Button";

const Home = () => {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetch_tasks();
      setTasks(tasksFromServer);
    };
    getTasks();
  }, []);

  //Fetch Tasks
  const fetch_tasks = async () => {
    const res = await fetch("http://localhost:5000/tasks");
    const data = await res.json();
    console.log("data", data);
    return data;
  };
  //Fetch Tasks
  const fetch_task = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`);
    const data = await res.json();
    console.log("data", data);
    return data;
  };

  //Delete Task
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, { method: "DELETE" });
    // console.log("Delete", id);
    setTasks(tasks.filter((task) => task.id !== id));
  };
  // Task Reminder
  const taskReminder = async (id) => {
    const taskToToggle = await fetch_task(id);
    const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder };

    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updTask),
    });

    const data = await res.json();

    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: data.reminder } : task
      )
    );
  };
  //Add Task
  const addTask = async (task) => {
    const res = await fetch(`http://localhost:5000/tasks`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(task),
    });
    const data = await res.json();
    setTasks([...tasks, data]);

    //   const id = Math.floor(Math.random() * 10000) + 1;
    //   const newTask = { id, ...task };
    //   setTasks([...tasks, newTask]);
  };
  return (
    <>
      <Header />
      <Button
        onClick={() => setShowAddTask(!showAddTask)}
        color={showAddTask ? "red" : "green"}
        text={showAddTask ? "Close" : "Add"}
      />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={taskReminder} />
      ) : (
        "No Tasks to Show"
      )}
    </>
  );
};

export default Home;
