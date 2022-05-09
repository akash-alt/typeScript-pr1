import React, { useState } from "react";
import "./App.css";
import InputField from "./component/input/InputField";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  return (
    <div className='App'>
      <span className='heading'>Todo App</span>
      <InputField todo={todo} setTodo={setTodo} />
    </div>
  );
};
export default App;

// note //
// if we want to create optional any input then we will use (?)
