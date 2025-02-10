import Child1 from "./Child1";

import { useState } from "react";

const App = () =>{
  const [message, setMessage] = useState("This is a message from the parent component");

  return (
    <div>
      <h1>Parent component</h1>
      <hr />
      <Child1  message={message} />
    </div>
  )
}

export default App;

// property type  => 

  // nested children => parent component (app) => child 3