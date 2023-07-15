import { useEffect, useState } from "react"
import { NewTodoForm } from "./newTodoForm"
import {TodoList} from "./TodoList"
import "./style.css"

export default function App(){
  const [todos, setTodos] = useState(()=>{
    const localValue = localStorage.getItem("ITEMS")
    if(localValue == null) return[]
    return JSON.parse(localValue)
  })
  useEffect(()=>{
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  }, [todos])

  // function toggleTodo(id, check){
  //   setTodos(currentTodos=>{
  //     return currentTodos.map(todo=>{
  //       if(todo.id === id){
  //         return {...todo, check}
  //       }
  //       return todo
  //     })
  //   })
  // }
  function toggleTodo (id, completed) {
    setTodos (currentTodos => { return currentTodos.map(todo => {
    if (todo.id === id) {
    return {...todo, completed }
    }
    return todo
    })
    })
  }
   
  function addTodo(title){
      setTodos(currentTodos=>{
          return [...currentTodos,{id: crypto.randomUUID(), title, completed : false}]
      })
  }

    // function deleteTodo (id) {
    // setTodos (currentTodos => { return currentTodos.filter(todo => todo.id !== id)
    // })
    // }
  
  function deleteTodo(id){
    setTodos(currentTodos => {
      console.log(id)
      return currentTodos.filter(todo => todo.id !== id)
    })
  }

  return (
    <>
      <NewTodoForm onSubmit={addTodo}/>
      <h1 className="header">Todo List</h1>
     <TodoList 
     todos = {todos}
     toggleTodo={toggleTodo}
     deleteTodo={deleteTodo}/> 
    </>
  )
}