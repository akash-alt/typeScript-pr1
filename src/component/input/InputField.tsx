import React, { useState } from "react";
import "./input.css";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
}

const InputField: React.FC<Props> = ({ todo, setTodo }) => {
  console.log(todo);
  return (
    <div>
      <form className='input'>
        <input
          className='input-box'
          type='input'
          placeholder='enter your text'
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button className='submit-btn' type='submit'>
          Click
        </button>
      </form>
    </div>
  );
};
export default InputField;

// note //
// so here we define React.FC  ---> it means of functional component
