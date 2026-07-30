import { useState } from "react";

function App() {
   const [todoList, setTodoList] = useState([]);
      const [todo, setTodo] = useState('');
  
      function updateList() {
          setTodoList([...todoList, todo]);
          setTodo('')
          console.log(todoList)
      }
      function deleteTodo() {
        for (let i = 0; i < todoList.length; i++);
        console.log(i)
        todoList.splice([i], 1);
        updateList();
      };
  
      return (
          <div className="border flex flex-col bg-gray-100 m-20 h-100">
            <p className="flex justify-center py-3 bg-black  text-white font-bold">My To-do-List</p>
            <div className="flex items-center justify-between gap-5 pr-15 m-5">
                <input type="text" value={todo} onChange={(e) => {
                    setTodo(e.target.value);
                }} className="border rounded-sm p-1 bg-white w-70"/>
                <button onClick={() => { if (todo !== '') updateList() }}  className="bg-blue-600 px-3.5 cursor-pointer py-1 text-white font-medium">+Add</button>
            </div>
              {todoList.map((todos, index) => (
                      <ul key={index} className="flex items-center py-1 justify-between pr-20">
                          <li className="mx-10 list-disc">{todos}</li>
                          <button onClick={deleteTodo} className="bg-red-600 text-white cursor-pointer font-medium px-3">Delete</button>
                      </ul>
  ))}

          </div>
      )
  }

export default App