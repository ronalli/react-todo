import classNames from 'classnames';
import style from './index.module.scss';

const Badge = ({ color, onClick, active }) => {
  return (
    <i
      className={classNames(style.badge, style[`${color}`], {
        [style.active]: active,
      })}
      onClick={onClick}
    ></i>
  );
};

export { Badge };
