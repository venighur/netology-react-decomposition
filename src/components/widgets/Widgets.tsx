import React from 'react';
import WidgetCard from './WidgetCard';

export function Widgets() {
  const resorted: [] = [];
  const tvPrograms: [] = [];
  const broadcasts: [] = [];

  const getTitleByLocation = () => {
    /* определяем заголовок по местоположению */
    return 'страна/город';
  }

  return (
    <div>
      <WidgetCard title="погода">
        /* тут будет погода */
      </WidgetCard>
      <WidgetCard title="посещаемое">
        <ul>
          {resorted.map((item) => (
            <li key={item.id}>
              <a href={item.url}>{item.title}</a>
            </li>
          ))}
        </ul>

      </WidgetCard>
      <WidgetCard title={getTitleByLocation()}>
        <a href="#">Расписания</a>
      </WidgetCard>
      <WidgetCard title="телепрограмма">
        <ul>
          {tvPrograms.map((programm) => (
            <li key={programm.id}>
              <a href={programm.url}>{programm.time} {programm.title}</a>
              <span>{programm.description}</span>
            </li>
          ))}
        </ul>
      </WidgetCard>
      <WidgetCard title="эфир">
        <ul>
          {broadcasts.map((broadcast) => (
            <li key={broadcast.id}>
              <a href={broadcast.url}>
                <img src="ссылка на иконку" alt="play" /> {broadcast.title}
              </a>
              <span>{broadcast.description}</span>
            </li>
          ))}
        </ul>
      </WidgetCard>
    </div>
  );
}