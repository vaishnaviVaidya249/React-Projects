
import {accordionData} from './utils/content.js';
import Accordian from './Accordian.jsx';

function App() {
  

  return (
    <div>

      <div className="flex flex-col items-center justify-center bg-black h-screen">
        {
          accordionData.map(({title,content})=>(
             <Accordian title={title} content={content}/>
          ))

        }

      </div>

    </div>
  )
}

export default App
