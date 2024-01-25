
import {useState} from 'react';
function App() {
  const [input,setInput]=useState("");

  function display(value){
    setInput(input+value);

  }

  function calculate(){
    let answers=eval(input);
    setInput(answers);
  }

  function AC(){
    setInput("");
  }

  function DC(){
    setInput(input.slice(0,-1));
  }
  

  return (
    <>

    <div className="grid place-items-center m-[100px]">
    <h1 className="font-bold text-3xl mb-4">Calculator</h1>
    <div className=" bg-blue-800 border-none w-[380px] h-[420px] flex flex-col items-center rounded-xl p-[20px] gap-2 place-items-center ">
      
      <input  className="text-right outline-none  p-4 bg-slate-200  w-[300px]  rounded-md" type="text" value={input} />
      
      <div className="grid grid-cols-4 gap-2 p-2">
      <button onClick={()=>AC()} className=" border-none bg-slate-200 w-[70px] h-[40px] rounded-md place-items-center ">AC</button>

      <button onClick={()=>DC()} className=" border-none bg-slate-200 w-[70px] h-[40px] rounded-md place-items-center ">DC</button>

        <button onClick={()=>display(".")} className=" border-none bg-slate-200 w-[70px] h-[40px] rounded-md place-items-center ">.</button>
        <button onClick={()=>display("/")} className=" border-none bg-slate-200 w-[70px] h-[40px] rounded-md place-items-center">/</button>
      </div>

      

      <div className=" grid grid-cols-4 gap-2 p-2 ">
        <button onClick={()=>display("7")} className=" border-none bg-slate-200 w-[70px] h-[40px] rounded-md place-items-center ">7</button>
        <button onClick={()=>display("8")} className=" border-none bg-slate-200 w-[70px] h-[40px] rounded-md place-items-center ">8</button>
        <button onClick={()=>display("9")} className =" border-none bg-slate-200 w-[70px] h-[40px] rounded-md place-items-center ">9</button>
        <button onClick={()=>display("*")} className =" border-none bg-slate-200 w-[70px] h-[40px] rounded-md place-items-center ">*</button>
      </div>

      <div className=" grid  grid-cols-4 gap-2 p-2">
        <button onClick={()=>display("4")} className=" border-none bg-slate-200 w-[70px] h-[40px] rounded-md place-items-center ">4</button>
        <button onClick={()=>display("5")} className=" border-none bg-slate-200 w-[70px] h-[40px] rounded-md place-items-center ">5</button>
        <button onClick={()=>display("6")} className=" border-none bg-slate-200 w-[70px] h-[40px] rounded-md place-items-center ">6</button>
        <button onClick={()=>display("-")} className=" border-none bg-slate-200 w-[70px] h-[40px] rounded-md place-items-center ">-</button>
      </div>

      <div className=" grid  grid-cols-4 gap-2 p-2 ">
        <button  onClick={()=>display("1")} className=" border-none bg-slate-200 w-[70px] h-[40px] rounded-md place-items-center ">1</button>
        <button  onClick={()=>display("2")} className=" border-none bg-slate-200 w-[70px] h-[40px] rounded-md place-items-center ">2</button>
        <button  onClick={()=>display("3")} className=" border-none bg-slate-200 w-[70px] h-[40px] rounded-md place-items-center ">3</button>
        <button  onClick={()=>display("+")} className=" border-none bg-slate-200 w-[70px] h-[40px] rounded-md place-items-center ">+</button>
      </div>

      <div className=" grid grid-cols-4 gap-2 p-2 ">
     
        <button onClick={()=>display("00")} className=" border-none bg-slate-200 w-[70px] h-[40px] rounded-md place-items-center ml-2.5">00</button>
        <button onClick={()=>display("0")} className=" border-none bg-slate-200 w-[70px] h-[40px] rounded-md place-items-center ml-1 ">0</button>
        <button onClick={()=>calculate()} className=" border-none bg-slate-200 w-[150px] h-[40px] rounded-md place-items-center ">=</button>
        
      </div>
      
    </div>
    
     </div>
    </>
  )
}

export default App
