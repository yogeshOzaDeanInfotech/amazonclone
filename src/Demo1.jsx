import React from 'react'

// pass data from child to parent using callback function
const Demo1 = ({count , setName}) => {
  let name = "superman";
  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={()=> setName(name)}>pass name to parent</button>
    </div>
  )
}

export default Demo1;