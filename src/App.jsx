

const App = () =>{
  const students = [
    {id : 1 , name : "student1" , age : 13},
    {id : 2 , name : "student2" , age : 14},
    {id : 3 , name : "student3" , age : 15},
    {id : 4 , name : "student4" , age : 11},
    {id : 5 , name : "student5" , age : 9},
  ]
  
  return (
    <div>
        <h1>List Of students</h1>
          {
            students.map((s, index)=>(
              <div key={index}>
                <h2>{s.name}</h2>
                <h4>{s.age}</h4>
              </div>
            ))
          }
    </div>
  )
}

export default App;


// student list in table format => 1 sr.no 2. name 3. age 4. address