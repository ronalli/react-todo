// import classNames from 'classnames';
import style from './index.module.scss';

const List = (props) => {
  const { list } = props;
  return (
    <ul className={style.todoList}>
      {list.map((item) => {
        return (
          <li key={item.id} className={item.active ? style.active : null}>
            {item.icon ? (
              <i>
                <img src={item.icon} alt='List Icon' />
              </i>
            ) : (
              <i className={`${style.circlyIcon} ${style[item.color]}`}></i>
            )}
            <span>{item.name}</span>
          </li>
        );
      })}
    </ul>
  );
};

export { List };
