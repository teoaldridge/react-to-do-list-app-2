import React, { useState } from "react";

function App() {
  const [input, setInput] = useState("");

  const [listItems, setListItems] = useState([]);

  function handleInput(event) {
    const newValue = event.target.value;
    setInput(newValue);
  }

  function handleClick(event) {
    setListItems((prevValue) => {
      return [...prevValue, input];
    });
  }

  //console.log(listItems);

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleInput} type="text" value={input} />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {listItems.map((todoItem) => (
            <li>{todoItem}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
