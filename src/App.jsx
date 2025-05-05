
import Heading from "./Heading"
import Add from "./Add"
import Item from "./Item"
import "./App.css";
import React,{useState} from 'react'
import Welcome from "./Welcome";
import { TodoItemsContext } from "./store/todo-item-store";
function App() {
  const[list,setList]=useState([])
  const[item,setItem]=useState("")
  const[date,setDate]=useState("")
  return (
    <TodoItemsContext.Provider value={{list,setList,item,setItem,date, setDate}}>
    <Heading ></Heading>
    <Add></Add>
    <Welcome></Welcome>
    <Item></Item>
    </TodoItemsContext.Provider>
  )
}

export default App
