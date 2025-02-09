import React, { useState } from 'react'
import Demo1 from './Demo1'

const App = () => {
  const [name, setName]=useState(null);

  return (
    <div>
      <h1>Parent App component</h1>
      <h2>Name form child : {name}</h2>
      <hr />
      <Demo1 count= "10" setName={setName}/>
    </div>
  )
}

export default App