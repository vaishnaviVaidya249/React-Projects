import {useState} from 'react';
import "./index.css";

function App() {
  const [backgroundColor,setBackgroundColor]=useState("white");
  const [textColor,setTextColor]=useState("#1b1b1b")
  const [button,setButton]=useState("white");


  function handleClick(){
    setBackgroundColor(backgroundColor==="white"?"#1b1b1b":"white");
    setTextColor(textColor==="#1b1b1b"?"#ffa31a":"#1b1b1b");
    setButton(backgroundColor==="white"?"#1b1b1b":"white");
  }

  return (
    <>
    <section style={{backgroundColor,color:textColor}}> 

      <button 
      className="w-40 h-12 border-2 border-black text-center float-right m-6" 
      onClick={handleClick}
       style={{button,color:textColor,border:`2px solid ${textColor}`}}>
        White Theme
      </button >

      <section className="text-center p-[300px] font-body text-7xl ">
        <h1 className="">Welcome To A<br/>
        Real World
        </h1>
        
      </section>

    </section>

    
       
    </>
  )
}

export default App
