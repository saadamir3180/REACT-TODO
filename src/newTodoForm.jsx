import { useState } from "react"


// export function NewTodoForm(props){
export function NewTodoForm({onSubmit}){
    const [newItem, setNewItem] = useState("")


    function handleSubmit(e){
        e.preventDefault()

        if(newItem === "") return

        // addTodo(newItem)
        // props.onSubmit(newItem)
        onSubmit(newItem)
        setNewItem("")
        // setTodos([...todos,{id: crypto.randomUUID, title: newItem, completed : false}])
    } 

    return <form onSubmit={handleSubmit} className="new-item-form">
      <div className="form-row">
        <label htmlFor="item">New Item</label>
        <input value={newItem} onChange={e=>setNewItem(e.target.value)} type="text" id="item" />
      </div>
      <button className="btn">Add</button>
    </form>
}