import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { Badge } from '../Badge';

import removeSvg from '../../assets/img/remove.svg';

import style from './index.module.scss';

const ListItem = ({
  name,
  active,
  icon,
  color,
  id,
  tasks,
  isRemovable,
  removeItemList,
  onClickItem,
  currentTask,
}) => {
  return (
    <Link
      to={!active ? `/lists/${id}` : '/'}
      className={classNames({
        [style.active]: active ? active : currentTask && currentTask.id === id,
        [style.todoListItem]: true,
      })}
      onClick={onClickItem ? () => onClickItem(name) : null}
    >
      {icon ? (
        <i>
          <img src={icon} alt={name} />
        </i>
      ) : (
        <Badge color={color.name} />
      )}
      <span>{name}</span>
      {tasks ? tasks.length > 0 ? <p>{tasks.length}</p> : null : null}
      {isRemovable && (
        <img
          className={style.removeBtn}
          src={removeSvg}
          alt='Remove icon'
          onClick={(e) => {
            e.stopPropagation();
            removeItemList(id);
          }}
        />
      )}
    </Link>
  );
};

export default ListItem;
