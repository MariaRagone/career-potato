import React from "react";
import Card from "./Card";
import { Droppable } from "react-beautiful-dnd";

// import ColumnStyles from "../styles/ColumnStyles.css";

function Column({ title, tasks, id }) {
  return (
    <Droppable droppableId={id}>
      {(provided) => (
        <div className="column">
          <h2>{title}</h2>
          {tasks.map((task, index) => (
            <Card key={index} text={task} />
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
}

export default Column;
