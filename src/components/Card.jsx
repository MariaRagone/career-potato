import React from "react";
import { Draggable } from "react-beautiful-dnd";
import "../styles/CardStyles.css";

function Card({ task, index }) {
  return (
    <Draggable draggableId={task.title} index={index}>
      {(provided) => (
        <div
          className="card"
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <p>Date Applied: {task.applied}</p>
          <p>Salary: {task.salaryOffered}</p>
          <p>Salary Asked For: {task.salaryAskedFor}</p>

          {task.link && (
            <p>
              <a href={task.link} target="_blank" rel="noopener noreferrer">
                Open Link
              </a>
            </p>
          )}

          {/* Display the attachment as a download link if it exists */}
          {task.attachment && (
            <p>
              <a href={URL.createObjectURL(task.attachment)} download={task.attachment.name}>
                Download Attachment
              </a>
            </p>
          )}
        </div>
      )}
    </Draggable>
  );
}

export default Card;
