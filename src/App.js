import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import { Route, Routes, useLocation } from 'react-router-dom';

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
  const [updateList, setUpdateList] = useState(false);
  const location = useLocation();

  useEffect(() => {
    axios
      .get('http://localhost:3001/lists?_expand=color&_embed=tasks')
      .then(({ data }) => {
        setLists(data);
      });

    axios
      .get('http://localhost:3001/colors')
      .then(({ data }) => setColors(data));
  }, []);

  useEffect(() => {}, [currentTask, setCurrentTask]);
  useEffect(() => {
    axios
      .get('http://localhost:3001/lists?_expand=color&_embed=tasks')
      .then(({ data }) => {
        setLists(data);
      });
    setUpdateList(false);
  }, [updateList]);

  useEffect(() => {
    const listId = location.pathname.slice(location.pathname.length - 1);
    setCurrentTask(...lists.filter((el) => el.id === Number(listId)));
  }, [lists, location.pathname]);

  const removeItemList = (id) => {
    axios.delete(`http://localhost:3001/lists/${id}`);
    setUpdateList(true);
    if (currentTask?.id === id) {
      setCurrentTask(null);
    }
  };

  const addItemList = (obj) => {
    axios
      .post('http://localhost:3001/lists', obj)
      .then(() => {
        setUpdateList(true);
      })
      .catch(() => console.warn('Ошибка добавления списка'));
  };

  // const onClickItem = (name) => {
  //   setCurrentTask(...lists.filter((el) => el.name === name));
  // };

  const addTask = (listId, obj) => {
    axios
      .post('http://localhost:3001/tasks', obj)
      .then(({ data }) => {
        let newLists = lists.map((item) => {
          if (item.id === listId) item.tasks = [...item.tasks, data];
          return item;
        });
        setLists(newLists);
      })
      .catch(() => console.warn('Ошибка при добавлении задачи'));
  };

  return (
    <div className='todo'>
      <section className='todo-sidebar'>
        {/* onClickItem={onClickItem} */}
        <List list={list} active />
        <List
          list={lists}
          isRemovable
          removeItemList={removeItemList}
          // onClickItem={onClickItem}
          currentTask={currentTask}
        />
        <ButtonAddList addItemList={addItemList} colors={colors} />
      </section>
      <section className='todo-content'>
        <Routes>
          <Route
            path='/'
            element={
              lists &&
              lists.map((el) => {
                return (
                  <Tasks list={el} addTask={addTask} key={el.id} withoutEmpty />
                );
              })
            }
          />
          <Route
            path='/lists/:id'
            element={
              lists.length && currentTask ? (
                <Tasks list={currentTask} addTask={addTask} />
              ) : (
                <h2 className='downloading-tasks'>Загрузка...</h2>
              )
            }
          />
          {/* {lists.length && currentTask ? (
            <Tasks list={currentTask} addTask={addTask} />
          ) : (
            <h2 className='downloading-tasks'>Загрузка...</h2>
          )} */}
        </Routes>
      </section>
    </div>
  );
};

export default App;
