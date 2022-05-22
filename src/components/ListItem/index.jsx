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
  isRemovable,
  removeItemList,
}) => {
  return (
    <li
      className={classNames(active ? style.active : null, style.todoListItem)}
    >
      {icon ? (
        <i>
          <img src={icon} alt={name} />
        </i>
      ) : (
        <Badge color={color} />
      )}
      <span>{name}</span>
      {isRemovable && (
        <img
          className={style.removeBtn}
          src={removeSvg}
          alt='Remove icon'
          onClick={() => removeItemList(id)}
        />
      )}
    </li>
  );
};

export default ListItem;
