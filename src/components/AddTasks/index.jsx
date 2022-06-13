import classNames from 'classnames';

import style from './index.module.scss';
import addSvg from '../../assets/img/add.svg';
import { useState } from 'react';

const AddTasks = ({ currentTask, addTask }) => {
  const [showForm, setShowForm] = useState(false);
  const [newTask, setNewTask] = useState('');

  const addTaskForm = () => {
    let id = currentTask.id;
    let value = newTask;
    addTask(id, value);
    setShowForm(!showForm);
  };

  return (
    <div className={style.addFormTasks}>
      {showForm ? (
        <div className={style.addFormTasksBlock}>
          <input
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            type='text'
            placeholder='Название задачи'
            className={classNames(style.addInput, 'field')}
          />
          <button
            className={classNames(style.addButton, 'button')}
            onClick={addTaskForm}
          >
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
