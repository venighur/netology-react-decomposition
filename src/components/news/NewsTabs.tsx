import React from 'react';

function NewsTabs() {
  const locationTab = () => {
    // определяем название вкладки по местоположению пользователя
    return '';
  }

  return (
    <div>
      <ul>
        <li>
          <a href="">Сейчас в СМИ</a>
        </li>
        <li>
          <a href="#">{locationTab()}</a>
        </li>
        <li>
          <a href="#">Рекомендуем</a>
        </li>
      </ul>
      <div>
        {/* определяем текущие дату и время */}
      </div>
    </div>
  );
}

export default NewsTabs;