import React from 'react';
import SearchTabs from './SearchTabs';
import SearchForm from './SearchForm';

export function Search() {
  const getExampleText = () => {
    // получаем пример текста  запроса
    return 'пример';
  }

  return (
    <div>
      <div>LOGO</div>
      <div>
        <SearchTabs />
        <SearchForm />
        <p>Найдется всё. Например, <span>{getExampleText()}</span></p>
      </div>
    </div>
  );
}