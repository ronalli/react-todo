import { Link } from 'react-router-dom';
import { AddTasks } from '../AddTasks';
import { TaskItem } from '../TaskItem';

import style from './index.module.scss';

const Tasks = ({
  list,
  addTask,
  withoutEmprty,
  removeTaskItem,
  updateTaskItem,
  checkedTask,
}) => {
  return (
    <div className={style.todoTasks}>
      <Link to={`/lists/${list.id}`}>
        <h2 style={{ color: list.color.hex }} className={style.todoTitle}>
          {list.name}
        </h2>
      </Link>

      {list.tasks.length > 0 ? (
        list.tasks.map((el) => {
          return (
            <TaskItem
              key={el.id}
              {...el}
              removeTaskItem={removeTaskItem}
              updateTaskItem={updateTaskItem}
              checkedTask={checkedTask}
              listId={list.id}
            />
          );
        })
      ) : withoutEmprty ? (
        <h2 className={style.notTodo}>Задачи отсутствуют</h2>
      ) : null}
      <AddTasks key={list.id} list={list} addTask={addTask} />
    </div>
  );
};

export { Tasks };
