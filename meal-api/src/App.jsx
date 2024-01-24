import {useState,useEffect} from 'react';
import axios from 'axios';
function App() {
  const [items,setItems]=useState([]);
  function generateId(sum){
    return sum+1;
  }

  useEffect(()=>{
    axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
    .then(res=>{
      setItems(res.data.meals);
    })
    .catch((err)=>{
      console.log(err);
    })
  },[])


  const itemList=items.map(({strMeal,strMealThumb,idMeal})=>{ //curly braces means we have to return something
    return(
      <section className="" key={generateId(0)}>
        <img  className="w-[300px] h-[250px] rounded-md hover:w-[320px] hover:h-[270]"  src={strMealThumb}/>
        <section className="m-2">
          <p>{strMeal}</p>
          <p>#{idMeal}</p>
        </section>
      </section>
    )

  })
  return <div className="grid grid-cols-3 gap-4 place-items-center m-10 p-4  h-auto w-screen">{itemList}</div>




}
   

  
  


export default App
