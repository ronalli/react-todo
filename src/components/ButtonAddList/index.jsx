import { List } from '../List';
import plusSvg from '../../assets/img/add.svg';

import style from './index.module.scss';
import { useState } from 'react';

const ButtonAddList = () => {
  const [visiblePopup, setVisiblePopup] = useState(false);

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
      {visiblePopup ? <div className={style.addListPopup}>123</div> : null}
    </>
  );
};

export { ButtonAddList };

rfc