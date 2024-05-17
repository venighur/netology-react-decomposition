import React from 'react';
import {QuoteType} from '../../types';
import Quote from './Quote';

export function Finance() {
  const [quotes, setQuotes] = React.useState<QuoteType[]>([]);

  React.useEffect(() => {
    // получаем данные котировок и сохраняем в state
  }, []);

  return (
    <ul>
      {quotes.map((quote) => <Quote key={quote.id} quote={quote} />)}
      <li><a href="ссылка на страницу по котировкам">...</a></li>
    </ul>
  );
}