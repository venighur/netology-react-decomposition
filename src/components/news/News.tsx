import React from 'react';
import NewsList from './NewsList';
import NewsTabs from './NewsTabs';
import { NewsItemType } from '../../types';

export function News() {
  const [news, setNews] = React.useState<NewsItemType[]>([]);

  React.useEffect(() => {
    // получаем список новостей и сохраняем в state
  }, []);

  return (
    <div>
      <NewsTabs />
      <NewsList news={news} />
    </div>
  );
}
