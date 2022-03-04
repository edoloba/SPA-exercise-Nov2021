import React, { useState , useEffect} from "react";
import "./App.css";

function App() {
  let nameArray = ['Arthur', 'Paul', 'John', 'Mike']
  const counting = Number(localStorage.getItem('count')) || 0;
  const naming = localStorage.getItem('name') || nameArray[Math.floor(Math.random() * nameArray.length)];
  const [count, countOperation] = useState(counting);
  const [name, changeName] = useState(naming);
  
  useEffect(() => {
    localStorage.setItem('count', count)
  }, [count]);
  useEffect(() => {
    localStorage.setItem('name', name)
  }, [name]);

  return (
    <div className= 'container'>
      <h1>
        {name} count is {count}
      </h1>
      <div>
      <button onClick={() => changeName(nameArray[Math.floor(Math.random() * nameArray.length)])}>Change Name</button>
      <button onClick={() => countOperation(parseInt(count) + 1)}>+</button>
      <button onClick={() => countOperation(count - 1)}>-</button>
      </div>
    </div>
  );
}

export default App