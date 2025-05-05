import { FaDeleteLeft } from "react-icons/fa6";
import { TodoItemsContext } from "./store/todo-item-store";
import { useContext } from "react";
function Item(){
  const {list,setList}=useContext(TodoItemsContext)
  const removeList =(index)=>{
        setList(list.filter((_,i)=> i!=index
        ))
  }
  return <div className="container  " >
    {list.map((item,index)=>{
      return (
       <div className="row row1" key={index}>
       <div className="col-6">{item.item}</div>
       <div className="col-4">{item.date}</div>
       <div className="col-2"><button type="button"className="btn btn-danger button1" onClick={()=> removeList(index)}><FaDeleteLeft />
       </button></div>
     </div>)
    })}
  
</div>
}
export default Item