import { useEffect, useState } from 'react';
import classNames from 'classnames';
// import DB from '../../assets/db.json';

import { List } from '../List';
import plusSvg from '../../assets/img/add.svg';
import closeSvg from '../../assets/img/close.svg';

import style from './index.module.scss';
import { Badge } from '../Badge';

// const defaultColor = DB.colors[0].id;

const ButtonAddList = ({ addItemList, colors }) => {
  const [valueInput, setValueInput] = useState('');
  const [visiblePopup, setVisiblePopup] = useState(false);
  const [selectedElement, setSelectedElement] = useState(3);

  useEffect(() => {
    if (Array.isArray(colors)) {
      setSelectedElement(colors[0].id);
    }
  }, [colors]);

  const list = [
    {
      id: 1,
      name: 'Добавить список',
      icon: plusSvg,
    },
  ];

  const addList = () => {
    let obj = {
      name: valueInput,
      colorId: selectedElement,
    };
    addItemList(obj);
  };

  const onClosePopup = () => {
    setSelectedElement(colors[0].id);
    setValueInput('');
    setVisiblePopup(false);
  };

  return (
    <>
      <div
        className={style.buttonAddList}
        onClick={() => setVisiblePopup(true)}
      >
        <List list={list} />
      </div>
      {visiblePopup ? (
        <div className={style.addListPopup}>
          <i className={style.closeButton} onClick={onClosePopup}>
            <img src={closeSvg} alt='Close Button' />
          </i>
          <input
            value={valueInput}
            onChange={(e) => setValueInput(e.target.value)}
            type='text'
            placeholder='Название списка'
            className={classNames(style.popupInput, 'field')}
          />
          <div className={style.popupBadge}>
            {colors.map((item) => {
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
          <button
            className={classNames(style.popupButton, 'button')}
            onClick={() => {
              addList();
              onClosePopup();
            }}
          >
            Добавить
          </button>
        </div>
      ) : null}
    </>
  );
};

export { ButtonAddList };
