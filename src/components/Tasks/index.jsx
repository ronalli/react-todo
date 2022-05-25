import { isElement } from 'react-dom/test-utils';
import { TaskItem } from '../TaskItem';

import style from './index.module.scss';

const Tasks = ({ currentTask }) => {
  console.log(currentTask);
  return (
    <div className={style.todoTasks}>
      <h2 className={style.todoTitle}>{currentTask.name}</h2>
      {currentTask.tasks.length > 0 ? (
        currentTask.tasks.map((el) => {
          return <TaskItem key={el.id} {...el} />;
        })
      ) : (
        <div className={style.notTodo}>Список пока пуст</div>
      )}
    </div>
  );
};

export { Tasks };
