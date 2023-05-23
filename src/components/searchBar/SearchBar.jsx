import React, { useState } from 'react';
import { SearchStyle } from './SerachBar.styled';

const Searchbar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(query);
    setQuery('');
  };

  const handleChange = e => {
    setQuery(e.target.value);
  };

  return (
    <SearchStyle.SearchBar>
      <SearchStyle.SearchForm onSubmit={handleSubmit}>
        <SearchStyle.SearchButton type="submit">
          <SearchStyle.SearchLabel>Search</SearchStyle.SearchLabel>
        </SearchStyle.SearchButton>
        <SearchStyle.SearchInput
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={query}
          onChange={handleChange}
        />
      </SearchStyle.SearchForm>
    </SearchStyle.SearchBar>
  );
};

export default Searchbar;
