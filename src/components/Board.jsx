import React, { useState } from "react";
import Column from "./Column";
import { DragDropContext } from "react-beautiful-dnd";
import "../styles/BoardStyles.css";
import TaskForm from "./TaskForm";

function Board() {
  const initialTasks = {
    todo: ["Task 1", "Task 2"],
    inProgress: ["Task 4", "Task 5"],
    done: ["Task 8", "Task 9", "Task 7", "Task 3"],
  };

  const [tasks, setTasks] = useState(initialTasks);
  // const [newTask, setNewTask] = useState("");

  const onDragEnd = (result) => {
    const { source, destination } = result;
    if (!destination) return;
    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    )
      return;

    const startColumn = tasks[source.droppableId];
    const finishColumn = tasks[destination.droppableId];
    if (startColumn === finishColumn) {
      const newTaskList = Array.from(startColumn);
      const [movedTask] = newTaskList.splice(source.index, 1);
      newTaskList.splice(destination.index, 0, movedTask);

      setTasks((prevState) => ({
        ...prevState,
        [source.droppableId]: newTaskList,
      }));
      return;
    }

    const startTasks = Array.from(startColumn);
    const finishTasks = Array.from(finishColumn);
    const [movedTask] = startTasks.splice(source.index, 1);
    finishTasks.splice(destination.index, 0, movedTask);

    setTasks((prevState) => ({
      ...prevState,
      [source.droppableId]: startTasks,
      [destination.droppableId]: finishTasks,
    }));
  };

  const addTask = (newTask) => {
    setTasks((prevTasks) => ({
      ...prevTasks,
      todo: [...prevTasks.todo, newTask],
    }));
  };

  // const handleAddTask = (e) => {
  //   e.preventDefault();
  //   if (newTask.trim() === "") return;

  //   setTasks((prevTasks) => ({
  //     ...prevTasks,
  //     todo: [...prevTasks.todo, newTask],
  //   }));

  //   setNewTask("");
  // };

  return (
    <div className="App">
      {/* <form onSubmit={handleAddTask} className="task-form">
        <input
          type="text"
          placeholder="Enter a new task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="task-input"
        />
        <button type="submit" className="task-button">
          Add Task
        </button>
      </form> */}
      <TaskForm onAddTask={addTask} />

      <DragDropContext onDragEnd={onDragEnd}>
        <div className="board">
          {/* Pass the correct IDs as 'id' props */}
          <Column title="To Do" tasks={tasks.todo} id="todo" />
          <Column
            title="In Progress"
            tasks={tasks.inProgress}
            id="inProgress"
          />
          <Column title="Done" tasks={tasks.done} id="done" />
        </div>
      </DragDropContext>
    </div>
  );
}

export default Board;
