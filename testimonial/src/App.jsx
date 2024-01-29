
import {useState} from 'react';
function App() {
  const [currentIndex,setCurrentIndex]=useState(0);



  const testimonials=[
    {
      quote:"This is the best product I've ever used!",
      author:"Jane Doe",
    },
    {
      quote:"I highly recommend this product!",
      author:"Roshan",
    },
    {
      quote:"Best Product!",
      author:"Vikram",
    }
  ]

  const handlePrevClick=()=>{
    setCurrentIndex(
      (currentIndex+testimonials.length-1)%testimonials.length
    )
  }

  const handleNextClick=()=>{
    setCurrentIndex(
      (currentIndex+1)%testimonials.length
    )
  }
  

  return (

    <div className="flex flex-col items-center justify-center mt-[200px]  ml-[500px] border-none w-[400px] h-52 rounded-xl bg-blue-200">

      <div className="text-center font-italic">
        {testimonials[currentIndex].quote}
      </div>

      <div className="text-center m-2 font-bold">
        {testimonials[currentIndex].author}
      </div>

      <div className="m-1 p-2 flex justify-between w-[350px] mt-4">
        <button className="border-none   m-1 w-[70px] bg-blue-400 rounded-xl p-2" onClick={handlePrevClick}>Prev</button>
        <button className="border-none  m-1 w-[70px] bg-blue-400 rounded-xl p-2" onClick={handleNextClick}>Next</button>
      </div>

    </div>
   
  );
}

export default App
