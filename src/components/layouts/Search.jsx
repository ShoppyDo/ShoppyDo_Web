import React, { useState } from 'react';
function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form className="search-bar" onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleInputChange}
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;