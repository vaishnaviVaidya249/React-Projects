import {useState} from 'react';

function App() {
  const [count,setCount]=useState(0);

  const increment=()=>{
    setCount(count+1);
  }

  const decrement=()=>{
    setCount(count-1);
  }

  return(
    
    <>
    <div className=" w-54 flex flex-col items-center justify-center h-screen bg-black">
    <h1 className="text-center m-6 text-white text-4xl">Counter</h1>
    <div className="flex items-center justify-center">
      <h2 className="text-white text-5xl">{count}</h2>
    </div>
    <div className="flex items-center justify-center">
    <button className=" w-[60px] h-12 m-4 rounded-full text-white text-3xl border-solid border-2 border-sky-500 place-items-center" onClick={increment}>+</button>
    <button className="  w-[60px] h-12 m-4 rounded-full text-white text-3xl border-solid border-2 border-sky-500 place-items-center" onClick={decrement}>-</button>
    </div>
    </div>
    </>
   
      
    
  )
}

export default App
