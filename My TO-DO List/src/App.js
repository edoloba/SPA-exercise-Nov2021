import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  //     const previousList = () =>{ if('Task' === null) {

  //         return JSON.parse(localStorage.getItem('Task'));
  //     } else {
  //         return [];
  //     };
  // };
  // or
  const previousList = localStorage.getItem("Task")
    ? JSON.parse(localStorage.getItem("Task"))
    : [];

  const previousSubList = localStorage.getItem('Details Tasks') ? JSON.parse(localStorage.getItem('Details Tasks')) : [];

  const [input, setInput] = useState("");
  const [list, setList] = useState(previousList);
  const [subInput, setSubInput] = useState('');
  const [subList, setSubList] = useState(previousSubList)

  const inputDeploy = input.charAt(0).toUpperCase() + input.slice(1);
  const inputSubDeploy = subInput.charAt(0).toUpperCase() + subInput.slice(1);
  
  const addInput = (e) => {
    e.preventDefault()
    const add = previousSubList;
    const size = add.length +1;
    <input>add.push(size);</input>
    setSubInput('')

  }
  let click = () => {
    if (input === "") {
      alert("Need a task before adding it");
    } else {
      setList((oldArr) => [...oldArr, inputDeploy]);
      setInput("");
    }
  };

  let clickSubAdd = () => {
    if (subInput === "") {
      alert("Need a task before adding it");
    } else {
      setSubList((oldArr) => [...oldArr, inputSubDeploy]);
      setSubInput("");
    }
  };

  useEffect(() => {
    localStorage.setItem(`Task`, JSON.stringify(list));
  }, [list]);

  let remove = (e) => {
    const index = e.target.dataset.index;
    const listTask = [...list];
    // console.log(e.target.dataset.index);
    listTask.splice(index, 1);
    setList(listTask);
  };

  return (
    <div>
      <h1>TO-DO</h1>
      <h3>
        You have {list.length} {list.length <= 1 ? "task" : "tasks"} to do{list.length >= 5 ? '! Man, you better move!' : ''}
      </h3>
      <ul>
        {list.map((task, i) => (
          <li key={i}>
            {task}
            <button className="add_button" onClick={addInput}>Add</button>

            <button className="done_button" data-index={i} onClick={remove}> 
            {/* or instead data-index={1} we can pass {i} to the remove() onClick={() => remove(i)} */}
              Done
            </button>
            <ul>
              {subList.map((subtask, ii) =>(
                <li key={ii}>
                  {subtask}
                  <button className="done_button" data-index={i} onClick={remove}>Done</button>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
      <div className="input_form">
        <input onChange={(e) => setInput(e.target.value)} value={input} />
        <button className="add_button" onClick={click}>
          Add
        </button>
      </div>
    </div>
  );
}

export default App;
