import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

import { ButtonAddList } from './components/ButtonAddList';
import { List } from './components/List';
import { Tasks } from './components/Tasks';

import DB from './assets/db.json';

import listSvg from './assets/img/list.svg';

const list = [
  {
    id: uuidv4(),
    icon: listSvg,
    name: 'Все задачи',
  },
];

const App = () => {
  const [lists, setLists] = useState([]);
  const [colors, setColors] = useState(null);
  useEffect(() => {
    axios
      .get('http://localhost:3001/lists?_expand=color&_embed=tasks')
      .then(({ data }) => setLists(data));

    axios
      .get('http://localhost:3001/colors')
      .then(({ data }) => setColors(data));
  }, []);

  const removeItemList = (id) => {
    let newList = lists.filter((el) => el.id !== id);
    setLists(newList);
  };

  const addItemList = ({ name, colorId }) => {
    axios.post('http://localhost:3001/lists', { name, colorId });
  };

  return (
    <div className='todo'>
      <section className='todo-sidebar'>
        <List list={list} />
        <List list={lists} isRemovable removeItemList={removeItemList} />
        <ButtonAddList addItemList={addItemList} colors={colors} />
      </section>
      <section className='todo-content'>
        <Tasks />
      </section>
    </div>
  );
};

export default App;
