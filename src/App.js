import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

import { ButtonAddList } from './components/ButtonAddList';
import { List } from './components/List';
import { Tasks } from './components/Tasks';
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
  const [currentTask, setCurrentTask] = useState(null);

  useEffect(() => {
    axios
      .get('http://localhost:3001/lists?_expand=color&_embed=tasks')
      .then(({ data }) => {
        setLists(data);
        // setCurrentTask(data[0]);
      });

    axios
      .get('http://localhost:3001/colors')
      .then(({ data }) => setColors(data));
  }, []);

  const removeItemList = (id) => {
    axios.delete(`http://localhost:3001/lists/${id}`);
  };

  const addItemList = ({ name, colorId }) => {
    axios.post('http://localhost:3001/lists', { name, colorId });
  };

  const onClickItem = (name) => {
    setCurrentTask(...lists.filter((el) => el.name === name));
  };

  return (
    <div className='todo'>
      <section className='todo-sidebar'>
        <List list={list} />
        <List
          list={lists}
          isRemovable
          removeItemList={removeItemList}
          onClickItem={onClickItem}
          currentTask={currentTask}
        />
        <ButtonAddList addItemList={addItemList} colors={colors} />
      </section>
      <section className='todo-content'>
        {lists.length && currentTask ? (
          <Tasks currentTask={currentTask} />
        ) : (
          <h2 className='downloading-tasks'>Загрузка...</h2>
        )}
      </section>
    </div>
  );
};

export default App;
