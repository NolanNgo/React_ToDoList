// import './App.css';
import React, { useState} from 'react';
import stickAll from './icon/checkall.svg';
import notStickAll from './icon/remove.svg';
import TodoList from '../src/Component/TodoList';
import { v4 } from 'uuid';
import useLocalStorage from './local';
import ContextProvider from './Context/ContextApp';
// import Switches from '../src/Component/button/Switch';
import InputItems from '../src/Component/Input';

// import Acc from './Component/Accdino';
// import Counter from './Component/Counter'
// import Navigation from './Component/Navigation';

function App() {
  // const [toDoList , setTodolist] = useState([]);
  // const [toDoList, setTodolist] = useLocalStorage("todolist", []);
  // const [newItems, setNewItems] = useState('');
  //const [isComplete , setIsComplete] = useState(true);
  // const [stateCurrent, setSateCurrent] = useState(true);
  // const [isEdit, setEdit] = useState(false);
  // const [url, setUrl] = useState(notStickAll);
  // const [id, setid] = useState('');
  // const inputElement = useRef();

  // useEffect(() =>{
  //   document.body.style = 
  // })


 
  return (
    <ContextProvider>
      {/* <Switches></Switches> */}
      <div className="App">
        <div className="container">
          <div className="myApp">
            <div className="Header">
              <InputItems></InputItems>
            </div>
            {/* <TodoList value_Todo={toDoList} onclick={OnClick} onedit={Edit} onDelete={onDelete} /> */}
            <TodoList/>
          </div>
        </div>
      </div>
    </ContextProvider>
  )

}

export default App;
