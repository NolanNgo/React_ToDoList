import React, {useContext} from 'react';
import {AppContext} from '../Context/ContextApp';
import Items from './Items';
const Todolist = (props) => {
    console.log(useContext(AppContext))
    const {toDoList, Edit, onClick , onDelete} = useContext(AppContext);
    return (
        <div className="TodoList"  >
            {
                toDoList.map((items,index) => <Items key={index} items={items} onclick={onClick} onedit={Edit} onDelete={onDelete}/>)
            }
        </div>
    );
}
export default Todolist;