import { List } from './components/List';
import { v4 as uuidv4 } from 'uuid';

import { ButtonAddList } from './components/ButtonAddList';
import DB from './assets/db.json';

import listSvg from './assets/img/list.svg';
import { useEffect, useState } from 'react';

const list = [
  {
    id: uuidv4(),
    icon: listSvg,
    name: 'Все задачи',
    // active: true,
  },
];

const App = () => {
  const [lists, setLists] = useState([]);
  useEffect(() => {
    setLists(formatLists(DB.lists));
  }, []);

  const formatLists = (arr) => {
    return arr.map((item) => ({
      ...item,
      color: DB.colors.find((color) => color.id === item.colorId).name,
    }));
  };

  return (
    <div className='todo'>
      <section className='todo-sidebar'>
        <List list={list} />
        <List list={lists} />
        <ButtonAddList />
      </section>
      <section className='todo-content'></section>
    </div>
  );
};

export default App;
