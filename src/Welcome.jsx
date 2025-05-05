import React,{useContext} from 'react'
import { TodoItemsContext } from './store/todo-item-store';
const Welcome = () => {
  const {list}=useContext(TodoItemsContext)
  if(list.length!==0) return ;
  return (
    <div className="welcome-container">
     <h2>Enjoy your day 😊</h2>
    </div>
  )
}

export default Welcome