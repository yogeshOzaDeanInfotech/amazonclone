// arrow function
const App = () =>{
  // variable declare
  let count = 10;
  console.log("Count :",count);
  
  function handleCountChange () {
    count = 20;
    console.log("Count :",count);
  }

  return (
    <div>
        <h1>Count :{count}</h1>
        <button onClick={handleCountChange}>change Number</button>
    </div>
  )
}

export default App;
