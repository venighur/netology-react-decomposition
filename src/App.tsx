import React from 'react';
import './App.css';
import { News } from './components/news';
import { Finance } from './components/finance';
import { Search } from './components/search';
import { Widgets } from './components/widgets';

function App() {
  return (
    <div className="App">
      <div>
        <div>
          <News />
          <Finance />
        </div>
        <div>/* Блок для рекламы */</div>
      </div>
      <Search />
      <div>/* Блок для рекламы */</div>
      <Widgets />
    </div>
  );
}

export default App;
