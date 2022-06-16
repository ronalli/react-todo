import ListItem from '../ListItem';
import style from './index.module.scss';

const List = (props) => {
  const {
    list,
    isRemovable,
    removeItemList,
    currentTask,
    onClickItem,
    active,
  } = props;
  return (
    <ul className={style.todoList}>
      {list.length ? (
        list.map((item) => {
          return (
            <ListItem
              key={item.id}
              {...item}
              isRemovable={isRemovable ? isRemovable : null}
              removeItemList={removeItemList ? removeItemList : null}
              currentTask={currentTask}
              onClickItem={onClickItem}
              active={active}
            />
          );
        })
      ) : (
        <span className={style.emptyList}>Список пуст</span>
      )}
    </ul>
  );
};

export { List };
