import React from "react";
import Card from "./Card";
import { Droppable } from "react-beautiful-dnd";
import "../styles/ColumnStyles.css";

function Column({ title, tasks, id }) {
  return (
    <Droppable droppableId={id}> 
      {(provided) => (
        <div
          className="column"
          {...provided.droppableProps}
          ref={provided.innerRef}
        >
          <h2>{title}</h2>
          {tasks.map((task, index) => (
            <Card key={index} text={task} index={index} columnId={id} /> 
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
}

export default Column;
