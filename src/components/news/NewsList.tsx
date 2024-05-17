import React from 'react';
import NewsItem from './NewsItem';
import {NewsItemType} from '../../types';

type NewsListProps = {
  news: NewsItemType[];
};

function NewsList({ news }: NewsListProps) {
  return (
    <ul>
      {news.map((item) => <NewsItem key={item.id} item={item} />)}
    </ul>
  );
}

export default NewsList;
