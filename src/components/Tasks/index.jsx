import { isElement } from 'react-dom/test-utils';
import { TaskItem } from '../TaskItem';

import style from './index.module.scss';

const Tasks = ({ list, name }) => {
  return (
    <div className={style.todoTasks}>
      <h2 className={style.todoTitle}>{name}</h2>
      {list.tasks.map((el) => {
        return <TaskItem key={el.id} {...el} />;
      })}
    </div>
  );
};

export { Tasks };
