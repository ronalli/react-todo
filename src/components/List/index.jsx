import ListItem from '../ListItem';
import style from './index.module.scss';

const List = (props) => {
  const { list, isRemovable, removeItemList } = props;
  return (
    <ul className={style.todoList}>
      {console.log(list)}
      {list.length ? (
        list.map((item) => {
          return (
            <ListItem
              key={item.id}
              {...item}
              isRemovable={isRemovable ? isRemovable : null}
              removeItemList={removeItemList ? removeItemList : null}
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
