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
        <h2 className={style.notTodo}>Задачи отсутствуют</h2>
      )}
    </div>
  );
};

export { Tasks };
