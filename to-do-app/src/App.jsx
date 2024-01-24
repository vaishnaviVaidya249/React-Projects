import {useState} from 'react';

function generateId(){
  return Math.floor(Math.random()*100);
}


function App() {
  const [todos,setTodos]=useState([]);
  const [input,setInput]=useState('');
  const [editId,setEditId]=useState(0);//contains the id of the lelement that we should edit

  const handleSubmit=(e)=>{
    e.preventDefault();
    if(editId){
      const editTodo=todos.find((i)=>i.id===editId);
      const updatedTodos=todos.map((t)=>t.id===editTodo.id 
      ? (t={id:t.id,text:input})
      : {id:t.id,text:t.text}
      );
      setTodos(updatedTodos);
      setEditId(0);
      setInput("");
      return;
    }

    if(input!==''){
      setTodos(todos=>
        todos.concat({
          text:input,
          id:generateId()
        })
      )

    }
    setInput("");
    
  }
  const removeTodo=(id)=>{
    setTodos((todos)=>todos.filter((t)=>t.id!==id))
  }
//1.whenever you click on edit the text should be wriiten in text box 
//2.then the button should be edit instead of add for this we need another state to tell us if it is in edit mode or not
//3.now the final step is to reflect the edited text in to the array when we click on the edit button 
  const handleEdit=(id)=>{
    const editTodo=todos.find((i)=>i.id===id);
    setInput(editTodo.text);
    setEditId(id);


  }
 

  return (
    <>
    
    <div className=" mx-auto mt-[100px] w-[500px] h-auto place-items-center flex flex-col items-center bg-purple-200 p-6 rounded-lg">
        <h1 className="mt-5 font-bold text-3xl">Todo List</h1>
        <div className="flex gap-4 m-8 ">
        <input className=" border border-black p-2 rounded-md outline-none w-[300px]" type="text" value={input} onChange={(e)=>setInput(e.target.value)}
        placeholder="New Todo"/>

        <button className="border border-none p-2 rounded-md bg-green-300 hover:bg-green-600 cursor-pointer " onClick={handleSubmit}>{editId ? "Edit" : "Add"}</button>
        </div>
        
        <ul>
          {todos.map(({text,id})=>{
            return( 
            <li className="bg-violet-100 m-2 mb-2 place-items-center border-none w-[360px] p-2 flow-root rounded-md" key={id}>
              <span className="float-left">{text}</span>
              <div className="float-right flex  gap-2">
              <button className=" w-10 h-7 place-items-center bg-slate-400  rounded-md " onClick={()=>handleEdit(id)}>Edit</button>
              <button className=" w-6 h-7 place-items-center bg-red-600  rounded-md" onClick={()=>removeTodo(id)}>X</button>
              </div>
            </li>
            ) 

          })}
        </ul>
        
      </div>
        
    </>
  )
}

export default App
