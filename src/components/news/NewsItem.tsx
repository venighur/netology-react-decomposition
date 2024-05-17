import React from 'react';
import { NewsItemType } from '../../types';

type NewsItemProps = {
  item: NewsItemType,
};

function NewsItem({ item }: NewsItemProps) {
  return (
    <li>
      <img src={item.icon} alt="icon"/>
      <a href={item.url}>{item.title}</a>
    </li>
  );
}

export default NewsItem;