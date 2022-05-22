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

  const findColor = (colorId) => {
    return DB.colors.find((color) => color.id === colorId).name;
  };

  const removeItemList = (id) => {
    let newList = lists.filter((el) => el.id !== id);
    setLists(newList);
  };

  const formatLists = (arr) => {
    return arr.map((item) => ({
      ...item,
      color: findColor(item.colorId),
    }));
  };

  const addItemList = ({ name, colorId }) => {
    const newItemLists = {
      id: lists.length + 1,
      name,
      color: findColor(colorId),
    };
    setLists(() => [...lists, newItemLists]);
  };

  return (
    <div className='todo'>
      <section className='todo-sidebar'>
        <List list={list} />
        <List list={lists} isRemovable removeItemList={removeItemList} />
        <ButtonAddList addItemList={addItemList} />
      </section>
      <section className='todo-content'></section>
    </div>
  );
};

export default App;
