import style from './index.module.scss';

const TaskItem = ({ text, id }) => {
  return (
    <div className={style.taskRow}>
      <div className={style.checkbox}>
        <div className={style.checkboxItem}>
          <input id={`check-${id}`} type='checkbox' />
          <label htmlFor={`check-${id}`}>
            <svg
              width='11'
              height='8'
              viewBox='0 0 11 8'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M9.29999 1.20001L3.79999 6.70001L1.29999 4.20001'
                stroke='#B3B3B3'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </label>
        </div>
      </div>
      <p>{text}</p>
    </div>
  );
};

export { TaskItem };
