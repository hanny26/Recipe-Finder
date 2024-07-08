import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className="search-bar flex items-center max-w-lg mx-auto mt-8">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for recipes..."
        className="w-full p-4 rounded-2xl border-t border-b border-l border-gray-200 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <button
        onClick={handleSearch}
        className="p-4 px-5 ml-3 shadow-2xl text-white rounded-xl  ring-4 ring-red-400 hover:bg-red-400 transition duration-300 flex items-center justify-center"
      >
        <FiSearch className="text-xl text-black" />
      </button>
    </div>
  );
};

export default SearchBar;
