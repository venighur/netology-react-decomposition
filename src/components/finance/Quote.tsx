import React from 'react';
import { QuoteType } from '../../types';

type QuoteProps = {
  quote: QuoteType;
}

function Quote({ quote }: QuoteProps) {
  return (
    <li>
      <a href={quote.url}>{quote.title}</a>
      <span>{quote.value}</span>
      <span>{quote.variation}</span>
    </li>
  );
}

export default Quote;
