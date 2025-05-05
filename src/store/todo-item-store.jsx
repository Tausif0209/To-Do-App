import React,{createContext} from 'react'

export const TodoItemsContext = createContext({
  list: [],
  setList: () => {},
  item: "",
  setItem: () => {},
  date: "",
  setDate: () => {}
});
