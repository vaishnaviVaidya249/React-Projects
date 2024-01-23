import {useState} from 'react';

function generateId(){
  return Math.floor(Math.random()*100);
}


function App() {
  const [todos,setTodos]=useState([]);
  const [input,setinput]=useState('');

  const handleSubmit=()=>{
    setTodos(todos=>
      todos.concat({
        text:input,
        id:generateId()
      })
    )
      setinput("");
    
  }
  const removeTodo=(id)=>{
    setTodos((todos)=>todos.filter((t)=>t.id!==id))
  }
 

  return (
    <>
    
    <div className=" mx-auto mt-[100px] w-[500px] h-auto place-items-center flex flex-col items-center bg-purple-200 p-6 rounded-lg">
        <h1 className="mt-5 font-bold text-3xl">Todo List</h1>
        <div className="flex gap-4 m-8 ">
        <input className=" border border-black p-2 rounded-md outline-none w-[300px]" type="text" value={input} onChange={(e)=>setinput(e.target.value)}
        placeholder="New Todo"/>

        <button className="border border-none p-2 rounded-md bg-green-400 hover:bg-green-600,border-black cursor-pointer " onClick={handleSubmit}>Add</button>
        </div>
        
        <ul>
          {todos.map(({text,id})=>{
            return( 
            <li className="bg-violet-100 m-2 mb-2 place-items-center border-none w-[360px] p-2 flow-root rounded-md" key={id}>
              <span className="float-left">{text}</span>
              <button className=" w-6 h-6 place-items-center bg-red-600 float-right rounded-md" onClick={()=>removeTodo(id)}>X</button>
            </li>
            ) 

          })}
        </ul>
        
      </div>
        
    </>
  )
}

export default App
