export default function SearchBar({ searchBar }) {
  return (
    <input
      type="text"
      placeholder="Search..."
      className="search-input"
      style={{ display: searchBar ? "block" : "none" }}
    />
  );
}
