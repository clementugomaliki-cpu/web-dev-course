import { useState } from "react"

const ToDoList = () => {
const [query, setQuery] = useState("");
const [todos, setTodos] = useState([]);

function addTodo(e) {
  e.preventDefault();
  //todos.push(query);
  
   
    const newTodo = {
        id: Date.now(),
        item: query,   
    }
        setTodos([...todos, newTodo]);
        setQuery("");
  }
}
  return (
   <section>
      <form action="" onSubmit={addTodo} className="">
        <input type="text" className="border border-gray-600 rounded-lg h-10 px-2" placeholder="Add new"
          value={query} onChange={(e) => setQuery(e.target.value)} />
        <button onClick={addTodo}>
          Add New Item
        </button>
      </form>

      <ul>
        {todos.map(todo => (
            <li key={todo.id}>
                {todo.item}
            </li>

        ))}
      </ul>
   </section>
  )


export default ToDoList