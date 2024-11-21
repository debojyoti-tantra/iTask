import { useState, useEffect } from 'react'
import Navbar from './components/Navbar';
import { v4 as uuidv4 } from 'uuid';
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

function App() {
   const [todo,setTodo] = useState(''); 
   const [todos,setTodos] = useState([]);
   const [showFinished,setShowFinished] = useState(true); 
   
   // Load todos from localStorage on initial render
   useEffect(() => {
      let todoString = localStorage.getItem("todos")
      if (todoString) {
         setTodos(JSON.parse(todoString))
      }
   }, []);
   
   // save todos to localstorage whenever the state changes
   useEffect(() => {  
     localStorage.setItem("todos", JSON.stringify(todos))
    }, [todos]);
   
   const handleEdit = (e, id) => {
     let t = todos.find(i => i.id === id);
     setTodo(t.todo)
     setTodos(todos.filter(i => i.id !== id));
   };
   
   const handleDelete = (e, id) => {
     const newTodos = todos.filter(item => item.id !== id);
     setTodos(newTodos)
     if (newTodos.length === 0) {
        localStorage.setItem("todos", JSON.stringify([]));
     }
   };
   
   const handleAdd = () => {
      if (todo.trim()) {
        setTodos([...todos, {id: uuidv4(), todo, isCompleted: false}])
        setTodo("")
      }
   };
   
   const handleChange = (e) => {
     setTodo(e.target.value)
   };
   
   const handleBox = (e) => {
      let id = e.target.name;
      const updateTodos = todos.map(item => 
         item.id === id ? { ...item, isCompleted: !item.isCompleted } : item
      );
      setTodos(updateTodos);
   };
   
   const toggleFinished = (e) => {
     setShowFinished(!showFinished)
   };

  return (
    <>
      <Navbar/>
      
      <div className="cont bg-purple-100 md:mx-32 md:my-7 m-3 p-5 rounded-2xl flex flex-col items-center gap-3">
         <p className="font-bold text-2xl">
            Add a Todo
         </p>
         
         <div className="flex gap-3">
            <input onChange={handleChange} value={todo} className="w-40 sm:w-64 md:w-96 m-1 p-1 border-2 border-violet-400 rounded" type="text" />
            <button onClick={handleAdd} className="w-12 text-white font-bold bg-violet-800 active:bg-violet-950 m-1 px-2 py-1 rounded-xl text-xs sm:text-sm">
               Save
            </button>
         </div>
         
         <div className="todos">
         
            <p className="font-bold text-xl flex justify-center items-center underline gap-2">
               Your Todos
            </p>
            
            <p className="flex gap-2 justify-center items-center">
               <p>show Finished</p>
               <input onChange={toggleFinished} type="checkbox" checked={showFinished} />
            </p>
            
            {todos.length===0 && <div className="todo text-2xl flex p-4 text-red-800 font-bold">No Todos to Display</div>}
            
            {todos.map(item => {
               return (showFinished || !item.isCompleted) && <div key={item.id} className="todo flex justify-between items-center gap-3 bg-purple-300 px-2 py-1 m-3 rounded-xl gap-1">
               
                  <input name={item.id} onChange={handleBox} type="checkbox" checked={item.isCompleted} />
                  
                  <p className="w-40 sm:w-72 md:w-80 from-neutral-300">
                     <p className={item.isCompleted?"line-through text-red-600":""}>{item.todo}</p>
                  </p>
                  
                  <div className="flex flex-col sm:flex-row sm:gap-1">
                     <button onClick={(e)=>{handleEdit(e, item.id)}} className="btn"><FaEdit /></button>
                     <button onClick={(e)=>{handleDelete(e, item.id)}} className="btn"><MdDelete /></button>
                  </div>
               </div>
            })}
            
         </div>
      </div>
    </>
  )
}

export default App
