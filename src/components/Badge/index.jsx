import style from './index.module.scss';

const Badge = ({ color }) => {
  return <i className={`${style.circlyBadge} ${style[color]}`}></i>;
};

export { Badge };
