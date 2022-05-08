import style from './index.module.scss';

const ListItem = ({ name, active, icon, color }) => {
  return (
    <li className={active ? style.active : null}>
      {icon ? (
        <i>
          <img src={icon} alt={name} />
        </i>
      ) : (
        <i className={`${style.circlyBadge} ${style[color]}`}></i>
      )}
      <span>{name}</span>
    </li>
  );
};

export default ListItem;
