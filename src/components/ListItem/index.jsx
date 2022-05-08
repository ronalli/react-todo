import classNames from 'classnames';
import { Badge } from '../Badge';

import style from './index.module.scss';

const ListItem = ({ name, active, icon, color }) => {
  return (
    <li className={classNames(active ? style.active : null, style.todoListItem)}>
      {icon ? (
        <i>
          <img src={icon} alt={name} />
        </i>
      ) : (
        <Badge color={color} />
      )}
      <span>{name}</span>
    </li>
  );
};

export default ListItem;
