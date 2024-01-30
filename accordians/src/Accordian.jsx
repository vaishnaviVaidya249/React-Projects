import React ,{useState} from 'react'


const Accordian = ({title,content}) => {
    const [isActive,setIsActive]=useState(false);
  return (
    <section className="flex flex-col items-center justify-center  m-2 p-1 bg-blue-200 ">

        <div className="flex justify-between space-between w-[40rem] items-center" onClick={()=>setIsActive(!isActive)}>
            <div>{title}</div>

            <p className="font-bold text-2xl text-center">{isActive ? "-" : "+"}</p>

        </div>

        <div className="w-[40rem] m-2">{isActive && <p>{content}</p>}</div>
    </section>
  )
}

export default Accordian
