import classNames from 'classnames';

import style from './index.module.scss';
import addSvg from '../../assets/img/add.svg';
import { useState } from 'react';

const AddTasks = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className={style.addFormTasks}>
      {showForm ? (
        <div className={style.addFormTasksBlock}>
          <input
            type='text'
            placeholder='Название задачи'
            className={classNames(style.addInput, 'field')}
          />
          <button className={classNames(style.addButton, 'button')}>
            Добавить задачу
          </button>
          <button
            className={classNames(style.removeButton, 'button')}
            onClick={() => setShowForm(!showForm)}
          >
            Отмена
          </button>
        </div>
      ) : (
        <div
          className={style.addFormTasksNew}
          onClick={() => setShowForm(!showForm)}
        >
          <img src={addSvg} alt='Add Tasks Icon' />
          <span>Новая задача</span>
        </div>
      )}
    </div>
  );
};

export { AddTasks };
