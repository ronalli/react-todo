import { TaskItem } from '../TaskItem';

import style from './index.module.scss';

const a = [
  'ReactJS Hooks (useState, useReducer, useEffect и т.д.)',
  // 'Изучить паттерны проектирования',
  // 'Изучить JavaScript',
  // 'Redux (redux-observable, redux-saga)',
];

const Tasks = (props) => {
  return (
    <div className={style.todoTasks}>
      <h2 className={style.todoTitle}>Фронтенд</h2>
      {a.map((el, index) => {
        return <TaskItem titleTask={el} key={index} />;
      })}
    </div>
  );
};

export { Tasks };
