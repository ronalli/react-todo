import ListItem from '../ListItem';
import style from './index.module.scss';

const List = (props) => {
  const { list } = props;
  return (
    <ul className={style.todoList}>
      {list.map((item) => {
        return <ListItem key={item.id} {...item} />;
      })}
    </ul>
  );
};

export { List };
