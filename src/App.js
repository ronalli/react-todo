import { List } from './components/List';
import { v4 as uuidv4 } from 'uuid';

import listSvg from './assets/img/list.svg';
import { ButtonAddList } from './components/ButtonAddList';

const list = [
  {
    id: uuidv4(),
    icon: listSvg,
    name: 'Все задачи',
    active: true,
  },
];

const list2 = [
  {
    id: 1,
    name: 'Продажи',
    color: 'line', //#B6E6BD
  },
  {
    id: 2,
    name: 'Фронтенд',
    color: 'pink', //#FFBBCC
  },
  {
    id: 3,
    name: 'Фильмы и сериалы',
    color: 'blue', //#64C4ED
  },
];

const App = () => {
  return (
    <div className='todo'>
      <section className='todo-sidebar'>
        <List list={list} />
        <List list={list2} />
        <ButtonAddList />
      </section>
      <section className='todo-content'></section>
    </div>
  );
};

export default App;
