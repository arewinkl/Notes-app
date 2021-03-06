import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [search, setSearch] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onSearch(search);
    setSearch("");
  }

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search notes"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button className="searchy" type="submit">
        🔍
      </button>
    </form>
  );
}
