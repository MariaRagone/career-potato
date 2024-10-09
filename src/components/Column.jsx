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
          {tasks && tasks.length > 0 ? (  // Add this check
            tasks.map((task, index) => (
              task ? (
                <Card key={task.id} task={task} index={index} />
              ) : (
                <div key={index} className="error">Task is undefined</div>
              )
            ))
          ) : (
            <p>No tasks available</p> // This will display if there are no tasks
          )}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
}

export default Column;
