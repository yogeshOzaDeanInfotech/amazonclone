import Child3 from "./Child3";


const Child2 = ({message}) =>{

    return (
      <div>
        <h1>Child2</h1>
        <Child3  message={message} />
      </div>
    )
  }
  
  export default Child2;
  