import React, { useState } from "react";
import Column from "./Column";
import { DragDropContext } from "react-beautiful-dnd";
import "../styles/BoardStyles.css";

function Board() {
  const initialTasks = {
    todo: ["Task 1", "Task 2"],
    inProgress: ["Task 4", "Task 5"],
    done: ["Task 8", "Task 9", "Task 7", "Task 3"],
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

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="board">
        <Column title="To Do" tasks={tasks.todo} id="todo" />
        <Column title="In Progress" tasks={tasks.inProgress} id="inProgress" />
        <Column title="Done" tasks={tasks.done} id="done" />
      </div>
    </DragDropContext>
  );
}

export default Board;
