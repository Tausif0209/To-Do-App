import { IoIosAdd } from "react-icons/io";
import React,{useContext} from "react";
import { TodoItemsContext } from "./store/todo-item-store";
function Add(){
  const {list,item,date,setList,setItem,setDate}=useContext(TodoItemsContext)
  const addList= ()=>{
    if (!item || !date || list.some(i => i.item === item && i.date === date)) return;

         setList([...list,{
          item:item, 
          date:date
         }])
         setItem("")
         setDate("")
  }
  return <>
  <div class="container ">
  <div class="row row1">
    <div class="col-6"><input type="text" placeholder="Enter To-Do Here" onChange={(e)=> setItem(e.target.value)}
    value={item}
    /></div>
    <div class="col-4"><input type="date" onChange={(e)=> setDate(e.target.value)}
    value={date}
    /></div>
    <div class="col-2"><button type="button" class="btn btn-success button1" onClick={addList}><IoIosAdd></IoIosAdd></button></div>
  </div>
</div>
  </>
}
export default Add