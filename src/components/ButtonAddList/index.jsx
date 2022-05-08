import { useState } from 'react';
import classNames from 'classnames';
import DB from '../../assets/db.json';

import { List } from '../List';
import plusSvg from '../../assets/img/add.svg';

import style from './index.module.scss';
import { Badge } from '../Badge';

const ButtonAddList = () => {
  const [visiblePopup, setVisiblePopup] = useState(true);
  const [selectedElement, setSelectedElement] = useState(DB.colors[0].id);
  const list = [
    {
      id: 1,
      name: 'Добавить список',
      icon: plusSvg,
    },
  ];

  return (
    <>
      <div
        className={style.buttonAddList}
        onClick={() => setVisiblePopup(!visiblePopup)}
      >
        <List list={list} />
      </div>
      {visiblePopup ? (
        <div className={style.addListPopup}>
          <input
            type='text'
            placeholder='Название списка'
            className={classNames(style.popupInput, 'field')}
          />
          <div className={style.popupBadge}>
            {DB.colors.map((item) => {
              return (
                <Badge
                  key={item.id}
                  color={item.name}
                  onClick={() => setSelectedElement(item.id)}
                  active={selectedElement === item.id}
                />
              );
            })}
          </div>
          <button className={classNames(style.popupButton, 'button')}>
            Добавить
          </button>
        </div>
      ) : null}
    </>
  );
};

export { ButtonAddList };
