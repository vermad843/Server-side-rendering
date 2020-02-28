
import React, {useState} from 'react';

function App() {
   const [state, setstate] = useState(0);
   
   function increment() {
     setstate(state + 1);
   } 

   function decrement() {
    setstate(state - 1);  
  } 

  return (
    <div className="App">
         <h1>count : {state}</h1>
         <button onClick = {increment}>Increment</button>
         <button onClick = {decrement}>Decrement</button> 
         
    </div>
  );
}

export default App;
