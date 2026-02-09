export default function ProjectCard({ project }) {
  return (
    <div style={{ border: "1px solid #ccc", borderRadius: "8px", padding: "1rem", backgroundColor: "#fff" }}>
      <h3 style={{ marginBottom: "0.5rem" }}>{project.title}</h3>
      <p>{project.description}</p>
    </div>
  );
}
