import React, { useState } from "react";
import "../styles/TaskFormStyles.css";

function TaskForm({ onAddTask }) {
  const [formData, setFormData] = useState({
    title: "",
    company: "",
    link: "",
    description: "",
    dateApplied: "",
    salaryOffered: "",
    salaryAskedFor: "",
    notes: "",
    attachment: null,
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      attachment: file,
    }));
  };

  // const [newTask, setNewTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.title.trim() === "") return;
    onAddTask(formData);
    setFormData({
      title: "",
      company: "",
      link: "",
      description: "",
      dateApplied: "",
      salaryOffered: "",
      salaryAskedFor: "",
      notes: "",
      attachment: null,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={formData.title}
        onChange={handleInputChange}
        className="task-input"
      />
      <textarea
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleInputChange}
        className="task-input"
      />
      <input
        type="url"
        name="link"
        placeholder="Link"
        value={formData.sallinkaryAskedFor}
        onChange={handleInputChange}
        className="task-input"
      />
      <input
        type="date"
        name="dateApplied"
        value={formData.dateApplied}
        onChange={handleInputChange}
        className="task-input"
      />
      <input
        type="salaryOffered"
        name="salaryOffered"
        placeholder="Salary"
        value={formData.salaryOffered}
        onChange={handleInputChange}
        className="task-input"
      />
      <input
        type="salaryAskedFor"
        name="salaryAskedFor"
        placeholder="Salary Asked For"
        value={formData.salaryAskedFor}
        onChange={handleInputChange}
        className="task-input"
      />
      <textarea
        name="notes"
        placeholder="Notes"
        value={formData.notes}
        onChange={handleInputChange}
        className="task-input"
      />
      <input
        type="file"
        name="attachment"
        placeholder="Attachments"
        onChange={handleFileChange}
        className="task-input"
      />

      <button type="submit" className="task-button">
        Add
      </button>
    </form>
  );
}

export default TaskForm;
