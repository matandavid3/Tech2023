import { useState } from "react";
function Counter() {
  const [count,setcount] = useState(1)
  function incr(){
    setcount (
      function (oldcount){
        return oldcount + 1  
      }
    )
    console.log(count)
  }
    return (
      <div>
        <h1>   Counter   </h1>
            <p> counter is at{count}</p>
      <button onclick={incr}>
        click to add 1 to counter
      </button>

      
      </div>
    );
  }
  export default Counter;