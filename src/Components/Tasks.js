import Task from "./Task";
const Tasks = ({ tasks, onDelete, onToggle }) => {
  return (
    // cannot do tasks.push() because state is immutable and we cannot change it,  we bassically recreate it and send it down
    // Since it is one way so setTasks([...tasks  ])
    <>
      {tasks.map((task, index) => (
        <Task key={index} task={task} onDelete={onDelete} onToggle={onToggle} />
      ))}
    </>
  );
};

export default Tasks;
