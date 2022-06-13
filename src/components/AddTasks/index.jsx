import axios from 'axios';
import classNames from 'classnames';

import style from './index.module.scss';
import addSvg from '../../assets/img/add.svg';
import { useState } from 'react';

const AddTasks = ({ currentTask, addTask }) => {
  const [showForm, setShowForm] = useState(false);
  const [newValueTask, setNewValueTask] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const addTaskForm = () => {
    setIsLoading(true);
    const newTask = {
      listId: currentTask.id,
      text: newValueTask,
      completed: false,
    };
    addTask(currentTask.id, newTask);
    setTimeout(() => {
      setIsLoading(false);
      clearForm();
    }, 1000);
  };

  const clearForm = () => {
    setNewValueTask('');
    setShowForm(false);
  };

  return (
    <div className={style.addFormTasks}>
      {showForm ? (
        <div className={style.addFormTasksBlock}>
          <input
            value={newValueTask}
            onChange={(e) => setNewValueTask(e.target.value)}
            type='text'
            placeholder='Название задачи'
            className={classNames(style.addInput, 'field')}
          />
          <button
            className={classNames(style.addButton, 'button')}
            onClick={addTaskForm}
            disabled={isLoading}
          >
            {isLoading ? 'Добавление..' : 'Добавить задачу'}
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
