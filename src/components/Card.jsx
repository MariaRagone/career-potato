import React from "react";
import { Draggable } from "react-beautiful-dnd";

function Card({ text, index }) {
  return (
    <Draggable draggableId={text} index={index}>
      {(provided) => (
        <div className="card">
          <p>{text}</p>
        </div>
      )}
    </Draggable>
  );
}

export default Card;
