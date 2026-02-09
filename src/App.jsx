import { useState } from "react";
import Header from "./components/Header.jsx";
import ProjectForm from "./components/ProjectForm.jsx"; // working now
import SearchBar from "./components/SearchBar.jsx";
import ProjectList from "./components/ProjectList.jsx";

function App() {
  // Step 1: State for projects
  const [projects, setProjects] = useState([
    { title: "Website Redesign", description: "Redesigned client website for better UX." },
    { title: "Mobile App", description: "Built a cross-platform mobile app." },
    { title: "Marketing Campaign", description: "Created branding materials and ads." },
  ]);

  // Step 2: State for search term
  const [searchTerm, setSearchTerm] = useState("");

  // Step 3: Function to add new project (passed to ProjectForm)
  const addProject = (project) => {
    setProjects([project, ...projects]); // new project goes to top
  };

  // Step 4: Filter projects by search
  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Step 5: Render components
  return (
    <div style={{ fontFamily: "sans-serif", padding: "1rem", maxWidth: "800px", margin: "0 auto" }}>
      <Header />
      <ProjectForm addProject={addProject} />
      <SearchBar setSearchTerm={setSearchTerm} />
      <ProjectList projects={filteredProjects} />
    </div>
  );
}

export default App;
