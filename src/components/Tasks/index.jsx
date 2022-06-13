import { AddTasks } from '../AddTasks';
import { TaskItem } from '../TaskItem';

import style from './index.module.scss';

const Tasks = ({ currentTask, addTask }) => {
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
      <AddTasks currentTask={currentTask} addTask={addTask} />
    </div>
  );
};

export { Tasks };
