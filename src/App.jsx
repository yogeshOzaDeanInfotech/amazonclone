import Header from "./Header";

import { useState } from "react";

const App = () =>{

  const [count, setCount]= useState(0);
  const [name, setName]= useState("batman");
  return(
    <div>
      <Header name = {name}/>
      <hr />
      <h1>Count : {count}</h1>
      <button onClick={()=> setCount(count + 1)}>+</button>
      <button onClick={()=> setName("superman")}>Change name</button>
    </div>
  )
}

export default App;