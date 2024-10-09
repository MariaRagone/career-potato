import React, { useState } from "react";
import Column from "./Column";
import TaskForm from "./TaskForm";
import { DragDropContext } from "react-beautiful-dnd";
import "../styles/BoardStyles.css";

function Board() {
  const initialTasks = {
    applied: [
      { title: "Full Stack Software Developer", company: "Pure Desires Ministry", link: "https://puredesire.org/wp-content/uploads/2024/09/Full-Stack-Developer-Job-Description.pdf", description: "", dateApplied: "Sept. 20", salaryOffered: "?", salaryAskedFor: "70-75k", notes: "", attachment: null },
      { title: "Task 2", description: "Description 2", dueDate: "2023-12-05", priority: "Medium", link: "", attachment: null }
    ],
    interview: [
      { title: "Task 4", description: "Description 4", dueDate: "2023-12-10", priority: "Low", link: "", attachment: null }
    ],
    offer: [
      { title: "Task 8", description: "Description 8", dueDate: "2023-11-20", priority: "Low", link: "", attachment: null }
    ],
    rejected: [
      { title: "Task 8", description: "Description 8", dueDate: "2023-11-20", priority: "Low", link: "", attachment: null }
    ]
  };

  const [tasks, setTasks] = useState(initialTasks);

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
      applied: [...prevTasks.applied, newTask],
    }));
  };

  return (
    <div className="App">

      <TaskForm onAddTask={addTask} />

      <DragDropContext onDragEnd={onDragEnd}>
        <div className="board">
          <Column title="Applied" tasks={tasks.applied} id="applied" />
          <Column title="Interview" tasks={tasks.interview} id="interview" />
          <Column title="Offer" tasks={tasks.offer} id="offer" />
          <Column title="Rejected" tasks={tasks.rejected} id="rejected" />
        </div>
      </DragDropContext>
    </div>
  );
}

export default Board;
