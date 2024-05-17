import React from 'react';

type SearchTab = {
  id: string;
  title: string;
  url: string;
}

function SearchTabs() {
  // получаем список вкладок (из БД, конфига, и т.д.)
  const tabs: SearchTab[] = [];

  return (
    <ul>
      {tabs.map((tab) => (
        <li key={tab.id}>
          <a href={tab.url}>{tab.title}</a>
        </li>
      ))}
      <li><a href="ссылка на страницу по поиску">ещё</a></li>
    </ul>
  );
}

export default SearchTabs;