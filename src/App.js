import logo from './logo.svg';
import { Typography, Divider } from 'antd';
import './App.css';
import TodoList from './components/TodoList';
import Filters from './components/Filters';
import { useEffect } from 'react';
import { fetchTodos } from './components/TodoList/todosSliceReduxThunk';
import { useDispatch } from 'react-redux';
import { setupServer } from './fakeApis';

if (process.env.NODE_ENV === 'development') {
  setupServer();
}

const { Title } = Typography;


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, [])

  return (
    <>
      <div
        style={{
          width: 500,
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: 'white',
          padding: 20,
          boxShadow: '0 0 10px 4px #bfbfbf',
          borderRadius: 5,
          height: '90vh',
        }}
      >
        <Title style={{ textAlign: 'center' }}>TODO APP with REDUX</Title>
        <Filters />
        <Divider />
        <TodoList />
      </div>
      <div className="App">
    
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>    
    </>
    
  );
}

export default App;
