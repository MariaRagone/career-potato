import React from "react";
import { Draggable } from "react-beautiful-dnd";
import "../styles/CardStyles.css";

function Card({ text, index, columnId }) {
  return (
    <Draggable draggableId={`${columnId}-${index}`} index={index}>
      {(provided) => (
        <div
          className="card"
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <p>{text}</p>
        </div>
      )}
    </Draggable>
  );
}

export default Card;
