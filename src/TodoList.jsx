import { TodoItem } from "./TodoItem"

export function TodoList({todos, toggleTodo, deleteTodo}){
    return  <ul className="list">
    {todos.length === 0 && "NO TODOS"}
    {todos.map(todo=>{
      return <TodoItem 
      {...todo}
      toggleTodo={toggleTodo}
      deleteTodo={deleteTodo}
    //   id ={todo.id} 
    //   title={todo.title} 
    //   completed={todo.completed} 
      key={todo.id} />
      })}
  </ul>
} 