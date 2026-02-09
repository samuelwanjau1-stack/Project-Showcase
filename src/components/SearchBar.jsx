export default function SearchBar({ setSearchTerm }) {
  return (
    <input
      type="text"
      placeholder="Search projects..."
      onChange={(e) => setSearchTerm(e.target.value)}
      style={{
        padding: "0.5rem",
        margin: "1rem 0",
        width: "100%",
        maxWidth: "400px"
      }}
    />
  );
}
