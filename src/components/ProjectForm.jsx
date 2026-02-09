import { useState } from "react";

export default function ProjectForm({ addProject }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description) return;
    addProject({ title, description });
    setTitle("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ margin: "1rem 0" }}>
      <input
        type="text"
        placeholder="Project Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ padding: "0.5rem", marginRight: "0.5rem", width: "200px" }}
      />
      <input
        type="text"
        placeholder="Project Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        style={{ padding: "0.5rem", marginRight: "0.5rem", width: "300px" }}
      />
      <button type="submit" style={{ padding: "0.5rem" }}>Add Project</button>
    </form>
  );
}
