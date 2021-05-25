import React , {createContext, useRef,useEffect ,useState} from 'react';
import { v4 } from 'uuid';
import useLocalStorage from '../local';
export const ThemContext = createContext();
export const AppContext = createContext();
const AppContextProvider = (props) =>{
    const [newItems, setNewItems] = useState('');
    const [isEdit, setEdit] = useState(false);
    const inputElement = useRef();
    const [toDoList, setTodolist] = useLocalStorage("todolist", []);
    const [id, setid] = useState('');
    useEffect(() => {
      localStorage.setItem('todolist', JSON.stringify(toDoList))
    }, [toDoList]);
  

    const onClick = (items) => {
        //console.log("onclick",typeof items);
        let valueComplete = items.isComplete;
        const index = toDoList.indexOf(items);
        setTodolist([
          ...toDoList.slice(0, index),
          {
            ...items, isComplete: !valueComplete
          },
          ...toDoList.slice(index + 1)
        ])
        //  console.log(index);
      }
      const Edit=(items)=>{
        setNewItems(items.name);
        setid(items.id);
        setEdit(true);
      }
      const Enter=(e)=> {
        if (e.keyCode === 13) {
          if (isEdit === true) {
            let nameEdit = inputElement.current.value;
            let index = toDoList.findIndex(items => items.id === id);
            let items = toDoList.find(items => items.id === id)
            setTodolist([
              ...toDoList.slice(0, index),
              {
                ...items, name: nameEdit
              },
              ...toDoList.slice(index + 1)
            ])
            setEdit(false)
            setNewItems('');
          } else {
            let name = inputElement.current.value;
            if (name) {
              setTodolist()
              let temp = [...toDoList, { id: v4(), name: name, isComplete: false }];
              setNewItems('');
              setTodolist(temp);
            } else {
              alert('please Enter Your Work')
            }
          }
    
        }
      }
      const onChange=(e)=> {
        setNewItems(e.target.value);
      }
      const onDelete=(items)=>{
        // let index = toDoList.indexOf(items);
        let a = toDoList.filter(b => b !== items);
        setTodolist(a);
      }
      return (
        <AppContext.Provider value={{newItems,isEdit,inputElement, toDoList , onClick , Edit,Enter,onChange, onDelete}}>
            {props.children}
        </AppContext.Provider>
      )
}
export default AppContextProvider



// const ThemeContextProvider = (props) => {
//     const [Theme, setTheme] = useState({
//         isLight: true,
//         Light : {
//             background: 'white',
//             color: 'black',
//         },
//         Dark: {
//             background: 'rgb(60, 60, 60)',
//             color: 'white',
//         }
//     })
//     const ToggleTheme = (valuess) =>{
//         setTheme({...Theme, isLight: valuess});
//     }
//     return(
//         <ThemContext.Provider value={{Theme,ToggleTheme }}>
//             {props.children}
//         </ThemContext.Provider>
//     )

// }
// export default ThemeContextProvider