import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();

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

  const updateTaskItem = (id, listId, text) => {
    let newTextTask = prompt('Изменить название задачи?', text);
    if (newTextTask) {
      let newLists = lists.map((list) => {
        if (list.id === listId) {
          list.tasks.map((task) => {
            return task.id === id ? (task.text = newTextTask) : task;
          });
        }
        return list;
      });
      setLists(newLists);
    }
    axios
      .patch(`http://localhost:3001/tasks/${id}`, { text: newTextTask })
      .catch(() => console.warn('Ну удалось обновить задачу!'));
  };

  const removeTaskItem = (id, listId) => {
    let newLists = lists.map((list) => {
      if (list.id === listId) {
        list.tasks = list.tasks.filter((task) => task.id !== id);
      }
      return list;
    });
    setLists(newLists);
    axios.delete(`http://localhost:3001/tasks/${id}`);
  };

  return (
    <div className='todo'>
      <section className='todo-sidebar'>
        <List
          list={list}
          active={location.pathname === '/'}
          onClickItem={(id) => navigate('/')}
        />
        <List
          list={lists}
          isRemovable
          removeItemList={removeItemList}
          currentTask={currentTask}
          onClickItem={(id) => navigate(`/lists/${id}`)}
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
                  <Tasks
                    list={el}
                    addTask={addTask}
                    key={el.id}
                    removeTaskItem={removeTaskItem}
                    withoutEmpty
                  />
                );
              })
            }
          />
          <Route
            path='/lists/:id'
            element={
              lists.length && currentTask ? (
                <Tasks
                  list={currentTask}
                  updateTaskItem={updateTaskItem}
                  removeTaskItem={removeTaskItem}
                  addTask={addTask}
                />
              ) : (
                <h2 className='downloading-tasks'>Загрузка...</h2>
              )
            }
          />
        </Routes>
      </section>
    </div>
  );
};

export default App;
