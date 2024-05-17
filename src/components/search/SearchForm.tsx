import React from 'react';

function SearchForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    /* логика поиска */
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" id="search" name="search" />
      <button type="submit">Найти</button>
    </form>
  );
}

export default SearchForm;